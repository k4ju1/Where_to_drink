const cache = new Map();
const cacheTtlMs = 10 * 60 * 1000;

function apiKey() {
  return process.env.GOOGLE_PLACES_API_KEY || process.env.GOOGLE_MAPS_API_KEY || "";
}

function clampRadiusKm(value) {
  const radius = Number(value) || 3;
  return Math.max(0.5, Math.min(10, radius));
}

function validCoordinate(point) {
  return (
    point &&
    Number.isFinite(Number(point.latitude)) &&
    Number.isFinite(Number(point.longitude))
  );
}

function haversineKm(from, to) {
  if (!validCoordinate(from) || !validCoordinate(to)) return null;

  const earthKm = 6371;
  const toRad = (degrees) => (degrees * Math.PI) / 180;
  const dLat = toRad(Number(to.latitude) - Number(from.latitude));
  const dLng = toRad(Number(to.longitude) - Number(from.longitude));
  const lat1 = toRad(Number(from.latitude));
  const lat2 = toRad(Number(to.latitude));
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return earthKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function normalizeCityConfig(cityConfig = {}) {
  const areas = Array.isArray(cityConfig.areas) ? cityConfig.areas.map(String).slice(0, 12) : [];
  const areaCoordinates = Object.fromEntries(
    Object.entries(cityConfig.areaCoordinates || {})
      .filter(([, point]) => validCoordinate(point))
      .map(([area, point]) => [
        area,
        { latitude: Number(point.latitude), longitude: Number(point.longitude) },
      ]),
  );

  return {
    id: String(cityConfig.id || "shanghai"),
    label: String(cityConfig.label || "上海"),
    countryCode: String(cityConfig.countryCode || "CN"),
    defaultArea: String(cityConfig.defaultArea || areas[0] || ""),
    areas,
    areaCoordinates,
  };
}

function priceFromGoogle(priceLevel) {
  const priceMap = {
    PRICE_LEVEL_FREE: "$",
    PRICE_LEVEL_INEXPENSIVE: "$",
    PRICE_LEVEL_MODERATE: "$$",
    PRICE_LEVEL_EXPENSIVE: "$$$",
    PRICE_LEVEL_VERY_EXPENSIVE: "$$$$",
  };
  return priceMap[priceLevel] || "$$";
}

function textFromReview(review) {
  if (!review) return "";
  if (typeof review === "string") return review;
  return review.text?.text || review.originalText?.text || "";
}

function reviewEvidence(place) {
  const reviews = (place.reviews || []).map(textFromReview).filter(Boolean).slice(0, 4);
  const metadata = [];
  const rating = Number(place.rating);
  const count = Number(place.userRatingCount);
  const typeLabels = (place.types || [])
    .filter((type) => !["establishment", "point_of_interest"].includes(type))
    .slice(0, 5)
    .join(", ");

  if (Number.isFinite(rating) && rating > 0) {
    metadata.push(`Google 評分 ${rating.toFixed(1)}${count ? `，共有 ${count} 則評價` : ""}`);
  }
  if (typeLabels) metadata.push(`Google Places 類型：${typeLabels}`);
  if (place.currentOpeningHours?.openNow === true) metadata.push("Google 顯示目前營業中");

  return [...reviews, ...metadata].slice(0, 5);
}

function distancesFromLocation(location, cityConfig, selectedArea, radiusKm) {
  if (!validCoordinate(location)) {
    return Object.fromEntries(cityConfig.areas.map((area) => [area, area === selectedArea ? 0.8 : radiusKm + 1.5]));
  }

  const distances = Object.fromEntries(
    cityConfig.areas.map((area) => {
      const distance = haversineKm(location, cityConfig.areaCoordinates[area]);
      return [area, distance == null ? radiusKm + 1.5 : +distance.toFixed(1)];
    }),
  );

  if (!Object.hasOwn(distances, selectedArea)) distances[selectedArea] = 0.8;
  return distances;
}

function nearestArea(distances, fallbackArea) {
  const sorted = Object.entries(distances).sort((a, b) => a[1] - b[1]);
  return sorted[0]?.[0] || fallbackArea;
}

function normalizePlace(place, index, context) {
  const name = place.displayName?.text || "Unnamed bar";
  const location = place.location
    ? { latitude: Number(place.location.latitude), longitude: Number(place.location.longitude) }
    : null;
  const distances = distancesFromLocation(location, context.cityConfig, context.area, context.radiusKm);

  return {
    id: `google_${place.id || `${context.cityConfig.id}_${index}`}`,
    googlePlaceId: place.id || "",
    source: "google",
    sourceRank: index,
    city: context.cityConfig.id,
    cityLabel: context.cityConfig.label,
    area: nearestArea(distances, context.area),
    name,
    title: name,
    address: place.formattedAddress || "",
    price: priceFromGoogle(place.priceLevel),
    rating: Number(place.rating) || 0,
    userRatingCount: Number(place.userRatingCount) || 0,
    placeUrl: place.googleMapsUri || "",
    distances,
    reviews: reviewEvidence(place),
    realWorld: {
      source: "google_places",
      placeId: place.id || "",
      address: place.formattedAddress || "",
      latitude: location?.latitude || null,
      longitude: location?.longitude || null,
      lastVerified: new Date().toISOString().slice(0, 10),
    },
  };
}

function cacheKey({ intentText, cityConfig, area, radiusKm }) {
  return JSON.stringify({
    q: String(intentText || "").trim().toLowerCase().slice(0, 160),
    city: cityConfig.id,
    area,
    radius: radiusKm,
  });
}

async function searchGooglePlaces({ intentText, cityConfig, area, radiusKm }) {
  const key = apiKey();
  if (!key) return { ok: false, reason: "missing_api_key", bars: [] };

  const center = cityConfig.areaCoordinates[area] || cityConfig.areaCoordinates[cityConfig.defaultArea];
  const textQuery = [intentText, "cocktail bar", "bar", area, cityConfig.label]
    .filter(Boolean)
    .join(" ");
  const body = {
    textQuery,
    languageCode: "zh-Hant",
    regionCode: cityConfig.countryCode,
    maxResultCount: 12,
  };

  if (validCoordinate(center)) {
    body.locationBias = {
      circle: {
        center,
        radius: Math.round(radiusKm * 1000),
      },
    };
  }

  const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask": [
        "places.id",
        "places.displayName",
        "places.formattedAddress",
        "places.location",
        "places.rating",
        "places.userRatingCount",
        "places.priceLevel",
        "places.googleMapsUri",
        "places.types",
        "places.currentOpeningHours",
        "places.reviews",
      ].join(","),
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const rawDetail = await response.text();
    let detail = rawDetail.slice(0, 500);
    let googleReason = "";

    try {
      const parsed = JSON.parse(rawDetail);
      googleReason = parsed.error?.details?.find((item) => item.reason)?.reason || "";
      detail = parsed.error?.message || detail;
    } catch {
      // Keep Google's raw text when it is not JSON.
    }

    return {
      ok: false,
      reason: "google_places_error",
      googleReason,
      detail: detail.slice(0, 500),
      bars: [],
    };
  }

  const data = await response.json();
  const bars = (data.places || []).map((place, index) =>
    normalizePlace(place, index, { cityConfig, area, radiusKm }),
  );

  return {
    ok: true,
    source: "google_places",
    query: textQuery,
    bars,
  };
}

export async function searchBarsRequest(body) {
  try {
    const intentText = String(body?.intentText || "").trim();
    const area = String(body?.area || "").trim();
    const radiusKm = clampRadiusKm(body?.radius);
    const cityConfig = normalizeCityConfig(body?.cityConfig);

    if (!area || !cityConfig.areas.includes(area)) {
      return { status: 400, body: { ok: false, reason: "missing_or_invalid_area", bars: [] } };
    }

    const key = cacheKey({ intentText, cityConfig, area, radiusKm });
    const cached = cache.get(key);
    if (cached && Date.now() - cached.cachedAt < cacheTtlMs) {
      return { status: 200, body: { ...cached.body, cached: true } };
    }

    const result = await searchGooglePlaces({ intentText, cityConfig, area, radiusKm });
    const status = result.ok ? 200 : result.reason === "missing_api_key" ? 503 : 502;
    const responseBody = { cached: false, ...result };
    if (result.ok) cache.set(key, { cachedAt: Date.now(), body: responseBody });

    return { status, body: responseBody };
  } catch (error) {
    return { status: 500, body: { ok: false, reason: "server_error", detail: error.message, bars: [] } };
  }
}
