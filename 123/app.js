const taxonomy = [
  {
    tag: "date_night",
    label: "約會感",
    positive: ["約會", "曖昧", "兩人", "浪漫", "燈光很美", "燈光昏暗", "date", "romantic"],
    negative: ["不適合約會", "太吵不浪漫"],
    intent: ["約會", "曖昧", "浪漫", "帶女生", "帶男生", "兩個人", "date"],
  },
  {
    tag: "lively_party",
    label: "熱鬧派對",
    positive: ["熱鬧", "很嗨", "high", "狂歡", "人很多", "人多", "週五", "party", "crowded"],
    negative: ["冷清", "沒氣氛", "太空"],
    intent: ["熱鬧", "热闹", "吵鬧", "吵闹", "很嗨", "嗨一點", "嗨一点", "炸", "蹦", "好玩", "high", "派對", "派对", "週末", "周末", "牛逼", "厲害", "厉害", "party"],
  },
  {
    tag: "quiet_conversation",
    label: "安靜聊天",
    positive: ["安靜", "好聊天", "可以聊天", "能好好說話", "音量剛好", "quiet"],
    negative: ["太吵", "吵到", "聽不到", "用喊的", "沒法聊天", "根本聽不到"],
    intent: ["安靜", "聊天", "不要太吵", "別太吵", "能說話", "quiet"],
  },
  {
    tag: "cozy_chill",
    label: "慵懶放鬆",
    positive: ["舒服", "沙發", "慵懶", "放鬆", "不趕人", "一個人", "自在", "chill", "cozy"],
    negative: ["很趕", "壓迫", "坐不住", "不舒服"],
    intent: ["放鬆", "chill", "舒服", "一個人", "慢慢喝", "沙發", "不趕"],
  },
  {
    tag: "live_music",
    label: "現場演出",
    positive: ["live band", "live music", "駐唱", "現場演出", "現場音樂", "樂隊", "爵士"],
    negative: ["駐唱太吵", "live 太吵"],
    intent: ["live", "駐唱", "現場音樂", "樂隊", "爵士"],
  },
  {
    tag: "dj_dance",
    label: "DJ / 跳舞",
    positive: ["dj", "舞池", "跳舞", "電子樂", "techno", "dance floor"],
    negative: ["dj 太吵", "音樂太轟"],
    intent: ["dj", "跳舞", "電子樂", "电子乐", "舞池", "蹦迪", "轟", "轰", "techno", "dance"],
  },
  {
    tag: "craft_cocktails",
    label: "精緻調酒",
    positive: ["特調", "調酒好喝", "signature", "創意", "客製", "驚艷", "cocktail", "mixology"],
    negative: ["調酒普通", "不好喝", "太甜", "水準不穩"],
    intent: ["調酒", "雞尾酒", "特調", "cocktail", "好喝", "創意", "signature"],
  },
  {
    tag: "whisky_spirits",
    label: "威士忌/烈酒",
    positive: ["威士忌", "whisky", "whiskey", "烈酒", "清酒", "rum", "gin", "收藏"],
    negative: ["威士忌選擇少", "酒單很少"],
    intent: ["威士忌", "whisky", "whiskey", "烈酒", "清酒", "gin", "rum"],
  },
  {
    tag: "beer_casual",
    label: "啤酒隨性",
    positive: ["啤酒", "精釀", "craft beer", "隨性", "casual"],
    negative: ["啤酒選擇少", "啤酒普通"],
    intent: ["啤酒", "精釀", "beer", "隨便喝", "casual"],
  },
  {
    tag: "wine_natural",
    label: "葡萄酒/自然酒",
    positive: ["葡萄酒", "自然酒", "紅酒", "白酒", "橙酒", "wine", "natural wine"],
    negative: ["酒款太少", "葡萄酒普通"],
    intent: ["葡萄酒", "自然酒", "紅酒", "白酒", "橙酒", "wine"],
  },
  {
    tag: "bar_food",
    label: "下酒小食",
    positive: ["小食", "下酒菜", "tapas", "炸物", "餐酒", "宵夜", "墊肚子"],
    negative: ["沒東西吃", "小食普通", "份量不大"],
    intent: ["小食", "下酒菜", "tapas", "餐酒", "宵夜", "想吃點"],
  },
  {
    tag: "value_for_money",
    label: "高性價比",
    positive: ["划算", "便宜", "合理", "性價比", "happy hour", "買一送一", "不貴"],
    negative: ["不便宜", "太貴", "偏貴", "要400", "價格高", "overpriced", "expensive"],
    intent: ["便宜", "划算", "性價比", "happy hour", "不貴", "預算"],
  },
  {
    tag: "friendly_staff",
    label: "服務親切",
    positive: ["友善", "親切", "有溫度", "熱情", "服務好", "staff were nice", "friendly"],
    negative: ["態度差", "冷淡", "不耐煩", "服務慢", "rude"],
    intent: ["服務好", "親切", "友善", "新手友好"],
  },
  {
    tag: "bartender_expertise",
    label: "調酒師專業",
    positive: ["調酒師", "bartender", "懂酒", "推薦", "會問口味", "會介紹", "客製"],
    negative: ["亂推薦", "不懂酒", "介紹很少"],
    intent: ["調酒師", "bartender", "口味推薦", "請 bartender 推薦", "懂酒", "會推薦", "客製", "吧台", "新手"],
  },
  {
    tag: "view_rooftop",
    label: "景觀/天台",
    positive: ["夜景", "天台", "露台", "窗景", "景觀", "rooftop", "view"],
    negative: ["沒景", "景被擋住"],
    intent: ["夜景", "天台", "露台", "景觀", "rooftop", "view"],
  },
  {
    tag: "hidden_speakeasy",
    label: "隱藏酒吧",
    positive: ["隱藏", "無招牌", "沒有招牌", "speakeasy", "難找", "書櫃", "暗門", "巷子"],
    negative: ["太難找", "入口難找"],
    intent: ["隱藏", "speakeasy", "神秘", "無招牌", "小眾", "暗門"],
  },
  {
    tag: "group_friendly",
    label: "適合團體",
    positive: ["聚會", "團體", "包廂", "大桌", "訂位", "朋友一群", "group"],
    negative: ["不適合多人", "位置太小", "不能訂位"],
    intent: ["聚會", "多人", "朋友", "團體", "包廂", "能訂位"],
  },
  {
    tag: "late_night",
    label: "深夜續攤",
    positive: ["深夜", "營業到很晚", "續攤", "後半夜", "last call", "不趕"],
    negative: ["關門早", "太早打烊"],
    intent: ["深夜", "續攤", "晚點", "半夜", "宵夜", "不要太早關"],
  },
  {
    tag: "pet_friendly",
    label: "寵物友善",
    positive: ["寵物友善", "帶狗", "毛孩", "pet friendly", "dog friendly"],
    negative: ["不能帶狗", "不讓寵物"],
    intent: ["寵物", "帶狗", "毛孩", "pet", "狗狗"],
  },
];

const fallbackCities = [
  {
    id: "shanghai",
    label: "上海",
    countryCode: "CN",
    dianpingCityId: 1,
    defaultArea: "新天地",
    areas: ["靜安寺", "新天地", "外灘", "徐家匯", "巨鹿路", "愚園路", "陸家嘴", "人民廣場", "淮海中路", "五角場"],
  },
  {
    id: "hongkong",
    label: "香港",
    countryCode: "HK",
    defaultArea: "中環",
    areas: ["中環", "上環", "蘭桂坊", "蘇豪", "金鐘", "灣仔", "銅鑼灣", "尖沙咀", "西九龍", "旺角", "堅尼地城", "太古坊"],
  },
];

const cityCatalog = window.BAR_DATA?.cities || fallbackCities;
const dianpingCityIds = {
  shanghai: 1,
  beijing: 2,
  shenzhen: 7,
  hangzhou: 3,
  hongkong: 1,
};

function dianpingUrlFor(cityId, title) {
  const city = cityCatalog.find((item) => item.id === cityId);
  const cityCode = city?.dianpingCityId || dianpingCityIds[cityId] || 1;
  return `https://www.dianping.com/search/keyword/${cityCode}/0_${encodeURIComponent(title)}`;
}

function normalizeBarRecord(bar) {
  const city = bar.city || "shanghai";
  const cityConfig = cityCatalog.find((item) => item.id === city);
  const title = bar.title || bar.name;

  return {
    city,
    cityLabel: cityConfig?.label || bar.cityLabel || "上海",
    ...bar,
    title,
    name: bar.name || title,
    source: bar.source || "manual",
    distances: bar.distances || {},
    reviews: Array.isArray(bar.reviews) ? bar.reviews : [],
    placeUrl: bar.placeUrl || bar.place_url || "",
    dianpingUrl: bar.dianpingUrl || dianpingUrlFor(city, title),
  };
}

const manualBars = (window.BAR_DATA?.bars || []).map(normalizeBarRecord);

const lowReviewEvidenceText = "评论较少，暂时无法得到有效信息";
const fallbackIntentTags = ["craft_cocktails", "cozy_chill"];
const $ = (id) => document.getElementById(id);

function setStatus(message) {
  const statusPill = $("statusPill");
  if (statusPill) statusPill.textContent = message;
}

function normalize(text) {
  return text
    .toLowerCase()
    .replaceAll("安静", "安靜")
    .replaceAll("热闹", "熱鬧")
    .replaceAll("吵闹", "吵鬧")
    .replaceAll("约会", "約會")
    .replaceAll("浪漫", "浪漫")
    .replaceAll("两个人", "兩個人")
    .replaceAll("调酒师", "調酒師")
    .replaceAll("调酒", "調酒")
    .replaceAll("鸡尾酒", "雞尾酒")
    .replaceAll("推荐", "推薦")
    .replaceAll("预算", "預算")
    .replaceAll("性价比", "性價比")
    .replaceAll("电子乐", "電子樂")
    .replaceAll("隐藏", "隱藏")
    .replaceAll("无招牌", "無招牌")
    .replaceAll("宠物", "寵物")
    .replace(/\s+/g, " ")
    .trim();
}

function containsAny(text, keywords = []) {
  const lowered = normalize(text);
  return keywords.some((keyword) => lowered.includes(keyword.toLowerCase()));
}

function clipEvidence(text) {
  const compact = text.replace(/\s+/g, " ").trim();
  return compact.length > 38 ? `${compact.slice(0, 38)}...` : compact;
}

function collectEvidence(reviews, keywords, exclusions = []) {
  return reviews
    .filter((review) => containsAny(review, keywords) && !containsAny(review, exclusions))
    .slice(0, 2)
    .map(clipEvidence);
}

function confidenceFor(evidenceCount, reviewCount) {
  const base = evidenceCount === 1 ? 0.6 : 0.78;
  return Math.min(0.96, +(base + Math.min(0.12, reviewCount * 0.02)).toFixed(2));
}

function analyzeBar(bar) {
  const tags = [];

  taxonomy.forEach((taxon) => {
    const positiveEvidence = collectEvidence(bar.reviews, taxon.positive, taxon.negative);
    const negativeEvidence = collectEvidence(bar.reviews, taxon.negative);

    if (positiveEvidence.length) {
      tags.push({
        tag: taxon.tag,
        label: taxon.label,
        polarity: "positive",
        confidence: confidenceFor(positiveEvidence.length, bar.reviews.length),
        evidence: positiveEvidence,
      });
    }

    if (negativeEvidence.length) {
      tags.push({
        tag: taxon.tag,
        label: taxon.label,
        polarity: "negative",
        confidence: confidenceFor(negativeEvidence.length, bar.reviews.length),
        evidence: negativeEvidence,
      });
    }
  });

  const divisor = Math.sqrt(Math.max(1, bar.reviews.length));
  const scoreByTag = tags.reduce((scores, item) => {
    const sign = item.polarity === "positive" ? 1 : -1;
    scores[item.tag] = (scores[item.tag] || 0) + (item.confidence * sign) / divisor;
    return scores;
  }, {});

  return {
    ...bar,
    tags,
    scoreByTag,
  };
}

function extractIntentTags(text) {
  const cleanText = normalize(text);
  const explicit = taxonomy
    .filter((taxon) => containsAny(cleanText, taxon.intent))
    .map((taxon) => taxon.tag);

  if (containsAny(cleanText, ["不要太吵", "別太吵", "不想吵", "安靜點"])) {
    explicit.push("quiet_conversation");
  }

  if (containsAny(cleanText, ["隨便推薦", "都可以", "不知道喝什麼", "沒想法"])) {
    explicit.push(...fallbackIntentTags);
  }

  return [...new Set(explicit)];
}

function fallbackIntentProfile(intentText) {
  const tags = extractIntentTags(intentText);

  return {
    source: "local",
    is_relevant: tags.length > 0,
    rewritten_query: intentText,
    weighted_tags: tags.map((tag) => ({
      tag,
      confidence: 0.62,
      reason: "local keyword fallback",
    })),
    must_have: [],
    avoid: [],
    mood: "",
    confidence: tags.length ? 0.62 : 0.4,
    clarification_question: "",
    refusal_reason: tags.length ? "" : "輸入內容不像是在找酒吧、喝酒或夜生活場景。",
  };
}

async function resolveIntentProfile(intentText) {
  if (!location.protocol.startsWith("http")) return fallbackIntentProfile(intentText);

  try {
    const response = await fetch("/api/intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        intentText,
        taxonomy: taxonomy.map((item) => ({
          tag: item.tag,
          label: item.label,
          intent: item.intent,
        })),
      }),
    });

    if (!response.ok) throw new Error(`Intent parser unavailable: ${response.status}`);
    const data = await response.json();
    if (!data.ok || !data.profile) throw new Error(data.reason || "No intent profile");
    return { ...data.profile, source: data.model || "gemini" };
  } catch {
    return fallbackIntentProfile(intentText);
  }
}

function mergeBars(apiBars = [], localBars = []) {
  const merged = new Map();
  apiBars.map(normalizeBarRecord).forEach((bar) => {
    const key = bar.googlePlaceId || bar.id || `${bar.city}:${bar.title}`;
    merged.set(key, bar);
  });
  localBars.forEach((bar) => {
    const key = bar.googlePlaceId || bar.id || `${bar.city}:${bar.title}`;
    merged.set(key, { ...bar, source: bar.source || "manual" });
  });
  return [...merged.values()];
}

async function resolveCandidateBars({ intentText, city, area, radius }) {
  const localBars = manualBars.filter((bar) => bar.city === city);

  if (!location.protocol.startsWith("http")) {
    return { bars: localBars, sourceLabel: "manual", apiAvailable: false };
  }

  try {
    const response = await fetch("/api/bars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        intentText,
        city,
        area,
        radius,
        cityConfig: cityById(city),
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      const detail = data.googleReason === "API_KEY_INVALID" ? "Google key invalid" : data.detail || data.reason;
      throw new Error(detail || `Bar search unavailable: ${response.status}`);
    }
    if (!data.ok || !Array.isArray(data.bars)) throw new Error(data.reason || "No bars");

    return {
      bars: mergeBars(data.bars, localBars),
      sourceLabel: data.cached ? "Google cached" : "Google Places",
      apiAvailable: true,
    };
  } catch (error) {
    return {
      bars: localBars,
      sourceLabel: localBars.length ? `manual fallback (${error.message})` : error.message || "no bar source",
      apiAvailable: false,
    };
  }
}

function distanceFor(bar, area) {
  return bar.distances?.[area] ?? 4.5;
}

function cityById(cityId) {
  return cityCatalog.find((city) => city.id === cityId) || cityCatalog[0];
}

function recommendBars({
  intentText,
  city,
  area,
  radius,
  intentProfile = fallbackIntentProfile(intentText),
  candidateBars = manualBars,
}) {
  const currentCity = cityById(city);

  if (intentProfile.is_relevant === false) {
    const result = {
      query: intentText,
      city: currentCity.id,
      city_label: currentCity.label,
      area,
      radius_km: radius,
      intent_tags: [],
      summary: "這不是一個酒吧需求",
      recommendations: [],
      intent_profile: intentProfile,
    };
    result.agent_reply = buildAgentReply(result);
    return result;
  }

  const intentTags = intentProfile.weighted_tags?.length
    ? [...new Set(intentProfile.weighted_tags.map((item) => item.tag))]
    : extractIntentTags(intentText);
  const tagWeights = Object.fromEntries(
    (intentProfile.weighted_tags || []).map((item) => [item.tag, Math.max(0.35, item.confidence || 0.6)]),
  );
  const analyzedBars = candidateBars.filter((bar) => bar.city === currentCity.id).map(analyzeBar);

  const results = analyzedBars
    .map((bar) => {
      const distanceKm = distanceFor(bar, area);
      const matchDetails = intentTags.map((tag) => {
        const score = bar.scoreByTag[tag] || 0;
        const evidenceTag = bar.tags.find((item) => item.tag === tag && item.polarity === "positive");
        const taxon = taxonomy.find((item) => item.tag === tag);

        return {
          tag,
          label: taxon?.label || tag,
          score: +score.toFixed(3),
          evidence: evidenceTag?.evidence || [],
        };
      });

      const matchedIntents = matchDetails.filter((item) => item.score > 0);
      const warnings = matchDetails.filter((item) => item.score < 0);
      const sourceRelevance = bar.source === "google" ? Math.max(0.08, 0.32 - (bar.sourceRank || 0) * 0.025) : 0;
      const sourceMatchedIntents =
        !matchedIntents.length && sourceRelevance > 0
          ? intentTags.slice(0, 2).map((tag, index) => {
              const taxon = taxonomy.find((item) => item.tag === tag);
              return {
                tag,
                label: taxon?.label || tag,
                score: +sourceRelevance.toFixed(3),
                evidence: index === 0 ? [lowReviewEvidenceText] : [],
              };
            })
          : [];
      const effectiveMatchedIntents = matchedIntents.length ? matchedIntents : sourceMatchedIntents;
      const positiveScore = matchDetails.reduce(
        (sum, item) => sum + Math.max(0, item.score) * (tagWeights[item.tag] || 0.62),
        0,
      );
      const negativePenalty = matchDetails.reduce(
        (sum, item) => sum + Math.max(0, -item.score) * (tagWeights[item.tag] || 0.62),
        0,
      );
      const distanceScore = Math.max(0, 1 - distanceKm / radius);
      const ratingScore = bar.rating ? Math.min(1, Math.max(0, (bar.rating - 3.5) / 1.5)) : 0;
      const finalScore =
        positiveScore * 0.62 + sourceRelevance * 0.38 + distanceScore * 0.22 + ratingScore * 0.1 - negativePenalty * 0.45;

      return {
        id: bar.id,
        name: bar.name,
        title: bar.title,
        dianping_url: bar.dianpingUrl,
        place_url: bar.placeUrl || bar.dianpingUrl,
        source: bar.source || "manual",
        city: bar.city,
        cityLabel: bar.cityLabel,
        area: bar.area,
        address: bar.address || bar.realWorld?.address || "",
        rating: bar.rating || 0,
        userRatingCount: bar.userRatingCount || 0,
        price: bar.price,
        distance_km: +distanceKm.toFixed(1),
        recommendation_score: +Math.max(0, finalScore).toFixed(3),
        matched_intents: effectiveMatchedIntents,
        warnings,
        top_vibes: bar.tags
          .filter((item) => item.polarity === "positive")
          .sort((a, b) => b.confidence - a.confidence)
          .slice(0, 4)
          .map((item) => ({ tag: item.tag, label: item.label })),
        review_evidence: bar.reviews.slice(0, 2).map(clipEvidence),
      };
    })
    .filter((bar) => bar.distance_km <= radius && bar.matched_intents.length)
    .sort((a, b) => b.recommendation_score - a.recommendation_score || a.distance_km - b.distance_km)
    .slice(0, 5);

  const result = {
    query: intentText,
    city: currentCity.id,
    city_label: currentCity.label,
    area,
    radius_km: radius,
    intent_tags: intentTags.map((tag) => {
      const taxon = taxonomy.find((item) => item.tag === tag);
      return { tag, label: taxon?.label || tag };
    }),
    summary: buildSummary(results, intentTags, currentCity.label, area),
    recommendations: results,
    intent_profile: intentProfile,
  };

  result.agent_reply = buildAgentReply(result);
  return result;
}

function buildSummary(results, intentTags, cityLabel, area) {
  if (!results.length) return `${cityLabel} · ${area} 附近暫時沒有高匹配酒吧`;

  const intentLabels = intentTags
    .map((tag) => taxonomy.find((item) => item.tag === tag)?.label)
    .filter(Boolean)
    .slice(0, 3)
    .join("、");

  return `${cityLabel} · ${area} 附近最適合「${intentLabels}」的是 ${results[0].title || results[0].name}`;
}

function buildAgentReply(result) {
  const intentLabels = result.intent_tags.map((item) => item.label).join("、");
  const understood = result.intent_profile?.rewritten_query || result.query;

  if (result.intent_profile?.is_relevant === false) {
    return {
      lead: "這句話不像是在找酒吧或今晚喝什麼，我先不繼續推薦。",
      reasons: [
        result.intent_profile.refusal_reason || "請輸入和酒吧、調酒、喝酒氛圍、地點或夜生活相關的需求。",
      ],
      alternatives: [],
    };
  }

  if (!result.recommendations.length) {
    return {
      lead: `我先不硬推。${result.city_label} · ${result.area} 在 ${result.radius_km}km 內，暫時沒有明確符合「${intentLabels}」的酒吧。`,
      reasons: [
        "你可以把半徑放到 3km 或 5km。",
        "也可以把需求說得再口語一點，比如「想蹦迪」「想安靜聊天」「想喝威士忌」。",
      ],
      alternatives: [],
    };
  }

  const top = result.recommendations[0];
  const topMatches = top.matched_intents.map((item) => item.label).join("、");
  const topEvidence = top.matched_intents.flatMap((item) => item.evidence).filter(Boolean)[0];
  const lead = `我理解你要的是「${understood}」。我會先推薦你去 ${top.title || top.name}。它在 ${top.area}，離你大約 ${top.distance_km.toFixed(1)}km，最貼近「${topMatches}」。`;
  const reasons = [
    topEvidence === lowReviewEvidenceText
      ? lowReviewEvidenceText
      : topEvidence
        ? `評論裡有這句很關鍵：「${topEvidence}」`
        : `它的整體 vibe 和你的需求最接近。`,
    `${top.price} 價位，適合今晚直接過去試一杯。`,
  ];

  const alternatives = result.recommendations.slice(1, 3).map((bar) => {
    const matches = bar.matched_intents.map((item) => item.label).join("、");
    return `${bar.title || bar.name}：${bar.distance_km.toFixed(1)}km，偏「${matches}」`;
  });

  return { lead, reasons, alternatives };
}

function renderCityOptions() {
  const options = cityCatalog
    .map((city) => `<option value="${city.id}">${city.label}</option>`)
    .join("");
  $("citySelect").innerHTML = options;
  $("landingCitySelect").innerHTML = options;
}

function renderAreaOptions(cityId, preferredArea = "") {
  const city = cityById(cityId);
  $("areaSelect").innerHTML = city.areas
    .map((area) => `<option value="${area}">${area}</option>`)
    .join("");
  $("areaSelect").value = city.areas.includes(preferredArea) ? preferredArea : city.defaultArea;
}

function setUrlState({ intentText, city, area, radius }) {
  const params = new URLSearchParams();
  params.set("q", intentText);
  params.set("city", city);
  params.set("area", area);
  params.set("radius", String(radius));
  const nextUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, "", nextUrl);
}

function readUrlState() {
  const params = new URLSearchParams(window.location.search);
  return {
    intentText: params.get("q") || "",
    city: params.get("city") || "",
    area: params.get("area") || "",
    radius: params.get("radius") || "",
  };
}

function renderRecommendations(result) {
  $("summaryText").textContent = result.summary;
  renderAgentAnswer(result.agent_reply);
  $("resultCount").textContent = String(result.recommendations.length);
  $("intentCount").textContent = String(result.intent_tags.length);
  $("bestDistance").textContent = result.recommendations.length
    ? result.recommendations[0].distance_km.toFixed(1)
    : "0.0";
  $("jsonOutput").textContent = JSON.stringify(result, null, 2);

  if (!result.recommendations.length) {
    $("recommendationList").innerHTML =
      result.intent_profile?.is_relevant === false
        ? `<div class="empty-state">沒有進入推薦流程</div>`
        : `<div class="empty-state">換個區域或放寬半徑試試</div>`;
    return;
  }

  $("recommendationList").innerHTML = result.recommendations
    .map((bar, index) => {
      const matches = bar.matched_intents.length
        ? bar.matched_intents
            .map((item) => `<span class="match-token">${item.label}</span>`)
            .join("")
        : `<span class="match-token muted-token">通用推薦</span>`;

      const vibes = bar.top_vibes.map((item) => `<span class="vibe-token">${item.label}</span>`).join("");
      const evidence = bar.matched_intents
        .flatMap((item) => item.evidence)
        .filter((line, lineIndex, lines) => lines.indexOf(line) === lineIndex)
        .slice(0, 2);
      const evidenceHtml = (evidence.length ? evidence : bar.review_evidence)
        .map((line) => `<li>${escapeHtml(line)}</li>`)
        .join("");
      const warnings = bar.warnings
        .map((item) => `<span class="warning-token">${item.label}偏弱</span>`)
        .join("");
      const linkLabel = bar.source === "google" ? "Google Maps" : "大众点评";
      const ratingMeta = bar.rating
        ? ` · ★ ${bar.rating.toFixed(1)}${bar.userRatingCount ? ` (${bar.userRatingCount})` : ""}`
        : "";
      const addressMeta = bar.address ? ` · ${escapeHtml(bar.address)}` : "";

      return `
        <article class="recommendation-card">
          <div class="rank">${index + 1}</div>
          <div class="recommendation-main">
            <div class="recommendation-head">
              <div>
                <h3>${escapeHtml(bar.title || bar.name)}</h3>
                <p>
                  ${escapeHtml(bar.cityLabel)} · ${escapeHtml(bar.area)} · ${bar.distance_km.toFixed(1)} km · ${escapeHtml(bar.price)}${ratingMeta}${addressMeta}
                  <a class="dianping-link" href="${escapeHtml(bar.place_url || bar.dianping_url)}" target="_blank" rel="noopener noreferrer">${linkLabel}</a>
                </p>
              </div>
              <div class="score-badge">${Math.round(bar.recommendation_score * 100)}</div>
            </div>
            <div class="token-row">${matches}</div>
            <div class="token-row subtle-row">${vibes}${warnings}</div>
            <ul class="evidence-list">${evidenceHtml}</ul>
          </div>
        </article>
      `;
    })
    .join("");
}

function setLoading(isLoading, mode = "finder") {
  const overlay = $("loadingOverlay");
  const isLanding = mode === "landing";
  document.body.classList.toggle("intro-loading", isLoading && isLanding);
  if (!overlay) return;
  overlay.classList.toggle("is-active", isLoading && !isLanding);
  overlay.setAttribute("aria-hidden", isLoading && !isLanding ? "false" : "true");
}

function renderAgentAnswer(reply) {
  const reasons = reply.reasons.map((line) => `<li>${escapeHtml(line)}</li>`).join("");
  const alternatives = reply.alternatives.length
    ? `
      <div class="agent-section">
        <ul>${reply.alternatives.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
      </div>
    `
    : "";

  $("agentAnswer").innerHTML = `
    <p>${escapeHtml(reply.lead)}</p>
    <div class="agent-section">
      <ul>${reasons}</ul>
    </div>
    ${alternatives}
  `;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function runRecommendation({ landingTransition = false } = {}) {
  const intentText = $("intentInput").value.trim();
  const city = $("citySelect").value;
  const area = $("areaSelect").value;
  const radius = Number($("radiusSelect").value);
  const startedAt = Date.now();
  setLoading(true, landingTransition ? "landing" : "finder");

  try {
    setStatus("Reading intent");
    const intentProfile = await resolveIntentProfile(intentText);
    let candidateBars = manualBars.filter((bar) => bar.city === city);
    let barSourceLabel = candidateBars.length ? "manual" : "no bar source";

    if (intentProfile.is_relevant !== false) {
      setStatus("Finding real bars");
      const resolvedBars = await resolveCandidateBars({ intentText, city, area, radius });
      candidateBars = resolvedBars.bars;
      barSourceLabel = resolvedBars.sourceLabel;
    }

    const result = recommendBars({
      intentText,
      city,
      area,
      radius,
      intentProfile,
      candidateBars,
    });

    if (landingTransition) {
      const remainingAnimation = Math.max(0, 10000 - (Date.now() - startedAt));
      if (remainingAnimation) await new Promise((resolve) => window.setTimeout(resolve, remainingAnimation));
      openFinderInterface();
    }

    renderRecommendations(result);
    setUrlState({ intentText, city, area, radius });
    const parserLabel = intentProfile.source === "local" ? "local" : "Gemini";
    setStatus(
      `${parserLabel} · ${barSourceLabel} · ${result.recommendations.length} / ${candidateBars.filter((bar) => bar.city === city).length} bars`,
    );
  } finally {
    setLoading(false, landingTransition ? "landing" : "finder");
  }
}

function setDefaultSearchControls() {
  $("citySelect").value = "shanghai";
  $("landingCitySelect").value = "shanghai";
  renderAreaOptions("shanghai", "新天地");
  $("radiusSelect").value = "3";
}

function clearIntent() {
  $("intentInput").value = "";
  runRecommendation();
}

async function copyJson(event) {
  event?.stopPropagation();
  await navigator.clipboard.writeText($("jsonOutput").textContent);
  setStatus("JSON copied");
  window.setTimeout(() => {
    setStatus("Ready");
  }, 1400);
}

async function shareCurrentSearch() {
  const intentText = $("intentInput").value.trim();
  const city = $("citySelect").value;
  const area = $("areaSelect").value;
  const radius = Number($("radiusSelect").value);
  setUrlState({ intentText, city, area, radius });
  const shareUrl = window.location.href;

  try {
    if (!navigator.share) throw new Error("Web Share API unavailable");
    await navigator.share({
      title: "Barfinder",
      text: "這是我找到的附近酒吧推薦",
      url: shareUrl,
    });
  } catch (error) {
    if (error.name === "AbortError") return;
    await navigator.clipboard.writeText(shareUrl);
    setStatus("Link copied");
    window.setTimeout(() => {
      setStatus("Ready");
    }, 1400);
  }
}

function initializeFromUrl() {
  const state = readUrlState();
  const hasSharedState = Boolean(state.intentText || state.city || state.area || state.radius);

  if (!hasSharedState) {
    setDefaultSearchControls();
    return;
  }

  const selectedCity = cityCatalog.some((city) => city.id === state.city)
    ? state.city
    : cityCatalog[0].id;
  $("citySelect").value = selectedCity;
  $("landingCitySelect").value = selectedCity;
  renderAreaOptions(selectedCity, state.area);

  if (state.radius && [...$("radiusSelect").options].some((option) => option.value === state.radius)) {
    $("radiusSelect").value = state.radius;
  }

  $("intentInput").value = state.intentText || "";
  $("landingIntentInput").value = $("intentInput").value;
  openFinderInterface({ scroll: false });
  runRecommendation();
}

function openFinderInterface() {
  document.body.classList.add("finder-page-open");
  $("finderInterface")?.classList.add("is-open");
  window.scrollTo({ top: 0, behavior: "auto" });
}

function enterFinderFromChat() {
  const chatText = $("landingIntentInput")?.value.trim();
  const landingCity = $("landingCitySelect")?.value || "shanghai";
  if (chatText) $("intentInput").value = chatText;
  $("citySelect").value = landingCity;
  renderAreaOptions(landingCity);
  window.scrollTo({ top: 0, behavior: "smooth" });
  runRecommendation({ landingTransition: true });
}

function bindEvents() {
  const landingInput = $("landingIntentInput");
  let isComposingText = false;

  landingInput?.addEventListener("compositionstart", () => {
    isComposingText = true;
  });
  landingInput?.addEventListener("compositionend", () => {
    isComposingText = false;
  });
  landingInput?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.shiftKey || event.isComposing || isComposingText || event.keyCode === 229) {
      return;
    }
    event.preventDefault();
    enterFinderFromChat();
  });
  $("recommendBtn").addEventListener("click", runRecommendation);
  $("copyBtn").addEventListener("click", copyJson);
  $("landingCitySelect").addEventListener("change", () => {
    $("citySelect").value = $("landingCitySelect").value;
    renderAreaOptions($("landingCitySelect").value);
  });
  $("citySelect").addEventListener("change", () => {
    renderAreaOptions($("citySelect").value);
    $("landingCitySelect").value = $("citySelect").value;
    runRecommendation();
  });
  $("areaSelect").addEventListener("change", runRecommendation);
  $("radiusSelect").addEventListener("change", runRecommendation);
  $("intentInput").addEventListener("input", () => {
    setStatus("Edited");
  });
}

bindEvents();
renderCityOptions();
initializeFromUrl();
