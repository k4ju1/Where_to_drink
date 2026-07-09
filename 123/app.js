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

const fallbackBars = [
  {
    id: "bar_042",
    name: "霧所 Mist",
    area: "靜安寺",
    price: "$$$",
    distances: { 靜安寺: 0.8, 新天地: 2.7, 外灘: 4.2, 徐家匯: 3.6 },
    reviews: [
      "藏在巷子裡沒有招牌，推開書櫃才是入口，超有儀式感！調酒師會先問你今天心情再客製",
      "酒好喝但真的不便宜，一杯都要400起。適合帶曖昧對象來，燈光很美",
      "週五去人太多，DJ 很嗨，跟朋友講話要用喊的",
    ],
  },
  {
    id: "bar_108",
    name: "小聲 Bar Low",
    area: "靜安寺",
    price: "$$",
    distances: { 靜安寺: 1.1, 新天地: 2.9, 外灘: 4.8, 徐家匯: 2.8 },
    reviews: [
      "音量剛好，很適合兩三個朋友安靜聊天，沙發坐起來很舒服",
      "bartender 很親切，會問你喜歡酸還是甜再推薦調酒",
      "價格不算便宜但不趕人，一個人坐吧台也很自在",
    ],
  },
  {
    id: "bar_217",
    name: "Radio Rooftop",
    area: "外灘",
    price: "$$$",
    distances: { 靜安寺: 4.1, 新天地: 2.6, 外灘: 0.6, 徐家匯: 6.2 },
    reviews: [
      "天台夜景真的漂亮，帶朋友來拍照很有面子",
      "週末 DJ 很嗨，舞池人很多，適合想 high 的晚上",
      "酒普通而且偏貴，主要是買景觀和氣氛",
    ],
  },
  {
    id: "bar_305",
    name: "麥芽巷 Alley Tap",
    area: "新天地",
    price: "$",
    distances: { 靜安寺: 2.3, 新天地: 0.7, 外灘: 2.8, 徐家匯: 4.7 },
    reviews: [
      "精釀啤酒選擇多，happy hour 很划算，氣氛隨性",
      "有大桌可以訂位，朋友聚會不用太拘束",
      "店員很友善，還可以帶狗坐門口的位置",
    ],
  },
  {
    id: "bar_411",
    name: "Blue Hour Jazz",
    area: "徐家匯",
    price: "$$",
    distances: { 靜安寺: 3.4, 新天地: 4.8, 外灘: 6.5, 徐家匯: 0.9 },
    reviews: [
      "晚上有爵士 live band，現場音樂很穩，氣氛成熟",
      "燈光昏暗，適合約會，也可以安靜聽歌",
      "威士忌選擇不少，bartender 對酒很懂",
    ],
  },
  {
    id: "bar_526",
    name: "Neon Room",
    area: "新天地",
    price: "$$",
    distances: { 靜安寺: 2.5, 新天地: 0.9, 外灘: 2.4, 徐家匯: 4.9 },
    reviews: [
      "電子樂和 DJ 都在線，週五晚上非常熱鬧",
      "舞池不大但大家都在跳，適合想喝完繼續蹦",
      "音樂太轟，完全不適合聊天",
    ],
  },
  {
    id: "bar_630",
    name: "Bottle Archive",
    area: "靜安寺",
    price: "$$$",
    distances: { 靜安寺: 1.4, 新天地: 3.2, 外灘: 4.9, 徐家匯: 3.1 },
    reviews: [
      "威士忌和 gin 的收藏很完整，酒單厚到可以慢慢看",
      "老闆很懂酒，會根據預算和口味推薦",
      "座位不多，氣氛安靜，適合認真喝一杯",
    ],
  },
  {
    id: "bar_744",
    name: "Porch & Paws",
    area: "徐家匯",
    price: "$$",
    distances: { 靜安寺: 3.1, 新天地: 4.3, 外灘: 6.4, 徐家匯: 0.7 },
    reviews: [
      "寵物友善，可以帶狗坐露台，店員會給水碗",
      "啤酒和簡單調酒都有，價格合理，晚上很 chill",
      "空間不算大，不太適合很多人聚會",
    ],
  },
];

const fallbackCities = [
  {
    id: "shanghai",
    label: "上海",
    dianpingCityId: 1,
    defaultArea: "新天地",
    areas: ["靜安寺", "新天地", "外灘", "徐家匯"],
  },
];

const cityCatalog = window.BAR_DATA?.cities || fallbackCities;
const dianpingCityIds = {
  shanghai: 1,
  beijing: 2,
  shenzhen: 7,
  hangzhou: 3,
};

function dianpingUrlFor(cityId, title) {
  const city = cityCatalog.find((item) => item.id === cityId);
  const cityCode = city?.dianpingCityId || dianpingCityIds[cityId] || 1;
  return `https://www.dianping.com/search/keyword/${cityCode}/0_${encodeURIComponent(title)}`;
}

const bars = (window.BAR_DATA?.bars || fallbackBars).map((bar) => {
  const city = bar.city || "shanghai";
  const title = bar.title || bar.name;

  return {
    city: "shanghai",
    cityLabel: "上海",
    ...bar,
    title,
    dianpingUrl: bar.dianpingUrl || dianpingUrlFor(city, title),
  };
});

const quickIntents = [
  "想找安靜一點、能好好聊天的調酒",
  "今天想喝威士忌，請 bartender 推薦",
  "週五想熱鬧一點，有 DJ 可以跳舞",
  "約會用，燈光好、不要太吵",
  "朋友聚會，啤酒、划算、能訂位",
  "想找有夜景的天台酒吧",
];

const fallbackIntentTags = ["craft_cocktails", "cozy_chill"];
const $ = (id) => document.getElementById(id);

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

  return [...new Set(explicit.length ? explicit : fallbackIntentTags)];
}

function fallbackIntentProfile(intentText) {
  return {
    source: "local",
    rewritten_query: intentText,
    weighted_tags: extractIntentTags(intentText).map((tag) => ({
      tag,
      confidence: 0.62,
      reason: "local keyword fallback",
    })),
    must_have: [],
    avoid: [],
    mood: "",
    confidence: 0.62,
    clarification_question: "",
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
    if (!data.ok || !data.profile?.weighted_tags?.length) throw new Error(data.reason || "No intent tags");
    return { ...data.profile, source: data.model || "gemini" };
  } catch {
    return fallbackIntentProfile(intentText);
  }
}

function distanceFor(bar, area) {
  return bar.distances[area] ?? 4.5;
}

function cityById(cityId) {
  return cityCatalog.find((city) => city.id === cityId) || cityCatalog[0];
}

function recommendBars({ intentText, city, area, radius, intentProfile = fallbackIntentProfile(intentText) }) {
  const currentCity = cityById(city);
  const intentTags = intentProfile.weighted_tags?.length
    ? [...new Set(intentProfile.weighted_tags.map((item) => item.tag))]
    : extractIntentTags(intentText);
  const tagWeights = Object.fromEntries(
    (intentProfile.weighted_tags || []).map((item) => [item.tag, Math.max(0.35, item.confidence || 0.6)]),
  );
  const analyzedBars = bars.filter((bar) => bar.city === currentCity.id).map(analyzeBar);

  const results = analyzedBars
    .map((bar) => {
      const distanceKm = distanceFor(bar, area);
      const matchDetails = intentTags.map((tag) => {
        const score = bar.scoreByTag[tag] || 0;
        const evidenceTag = bar.tags.find((item) => item.tag === tag && item.polarity === "positive");
        const taxon = taxonomy.find((item) => item.tag === tag);

        return {
          tag,
          label: taxon.label,
          score: +score.toFixed(3),
          evidence: evidenceTag?.evidence || [],
        };
      });

      const matchedIntents = matchDetails.filter((item) => item.score > 0);
      const warnings = matchDetails.filter((item) => item.score < 0);
      const positiveScore = matchDetails.reduce(
        (sum, item) => sum + Math.max(0, item.score) * (tagWeights[item.tag] || 0.62),
        0,
      );
      const negativePenalty = matchDetails.reduce(
        (sum, item) => sum + Math.max(0, -item.score) * (tagWeights[item.tag] || 0.62),
        0,
      );
      const distanceScore = Math.max(0, 1 - distanceKm / radius);
      const finalScore = positiveScore * 0.72 + distanceScore * 0.28 - negativePenalty * 0.45;

      return {
        id: bar.id,
        name: bar.name,
        title: bar.title,
        dianping_url: bar.dianpingUrl,
        city: bar.city,
        cityLabel: bar.cityLabel,
        area: bar.area,
        price: bar.price,
        distance_km: +distanceKm.toFixed(1),
        recommendation_score: +Math.max(0, finalScore).toFixed(3),
        matched_intents: matchedIntents,
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
      return { tag, label: taxon.label };
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
    topEvidence ? `評論裡有這句很關鍵：「${topEvidence}」` : `它的整體 vibe 和你的需求最接近。`,
    `${top.price} 價位，適合今晚直接過去試一杯。`,
  ];

  const alternatives = result.recommendations.slice(1, 3).map((bar) => {
    const matches = bar.matched_intents.map((item) => item.label).join("、");
    return `${bar.title || bar.name}：${bar.distance_km.toFixed(1)}km，偏「${matches}」`;
  });

  return { lead, reasons, alternatives };
}

function renderTaxonomy(activeTags = []) {
  const active = new Set(activeTags);
  $("taxonomyStrip").innerHTML = taxonomy
    .map(
      (taxon) =>
        `<span class="taxonomy-token ${active.has(taxon.tag) ? "active" : ""}">${taxon.label}</span>`,
    )
    .join("");
}

function renderQuickIntents() {
  $("quickIntents").innerHTML = quickIntents
    .map((intent) => `<button type="button" class="intent-chip">${intent}</button>`)
    .join("");

  document.querySelectorAll(".intent-chip").forEach((button) => {
    button.addEventListener("click", () => {
      $("intentInput").value = button.textContent;
      runRecommendation();
    });
  });
}

function renderCityOptions() {
  $("citySelect").innerHTML = cityCatalog
    .map((city) => `<option value="${city.id}">${city.label}</option>`)
    .join("");
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

  renderTaxonomy(result.intent_tags.map((item) => item.tag));

  if (!result.recommendations.length) {
    $("recommendationList").innerHTML = `<div class="empty-state">換個區域或放寬半徑試試</div>`;
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
        .slice(0, 2);
      const evidenceHtml = (evidence.length ? evidence : bar.review_evidence)
        .map((line) => `<li>${escapeHtml(line)}</li>`)
        .join("");
      const warnings = bar.warnings
        .map((item) => `<span class="warning-token">${item.label}偏弱</span>`)
        .join("");

      return `
        <article class="recommendation-card">
          <div class="rank">${index + 1}</div>
          <div class="recommendation-main">
            <div class="recommendation-head">
              <div>
                <h3>${escapeHtml(bar.title || bar.name)}</h3>
                <p>
                  ${escapeHtml(bar.cityLabel)} · ${escapeHtml(bar.area)} · ${bar.distance_km.toFixed(1)} km · ${escapeHtml(bar.price)}
                  <a class="dianping-link" href="${escapeHtml(bar.dianping_url)}" target="_blank" rel="noopener noreferrer">大众点评</a>
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

function renderAgentAnswer(reply) {
  const reasons = reply.reasons.map((line) => `<li>${escapeHtml(line)}</li>`).join("");
  const alternatives = reply.alternatives.length
    ? `
      <div class="agent-section">
        <strong>備選</strong>
        <ul>${reply.alternatives.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
      </div>
    `
    : "";

  $("agentAnswer").innerHTML = `
    <p>${escapeHtml(reply.lead)}</p>
    <div class="agent-section">
      <strong>為什麼</strong>
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

async function runRecommendation() {
  const intentText = $("intentInput").value.trim() || "想喝一杯好喝的調酒，舒服一點";
  const city = $("citySelect").value;
  const area = $("areaSelect").value;
  const radius = Number($("radiusSelect").value);
  $("statusPill").textContent = "Reading intent";
  const intentProfile = await resolveIntentProfile(intentText);
  const result = recommendBars({
    intentText,
    city,
    area,
    radius,
    intentProfile,
  });

  renderRecommendations(result);
  setUrlState({ intentText, city, area, radius });
  const parserLabel = intentProfile.source === "local" ? "local" : "Gemini";
  $("statusPill").textContent = `${parserLabel} · ${result.recommendations.length} / ${bars.filter((bar) => bar.city === city).length} bars`;
}

function loadSample() {
  $("citySelect").value = "shanghai";
  renderAreaOptions("shanghai", "新天地");
  $("radiusSelect").value = "3";
  $("intentInput").value = "想找安靜一點、能好好聊天的調酒，最好 bartender 可以推薦";
  runRecommendation();
}

function clearIntent() {
  $("intentInput").value = "";
  runRecommendation();
}

async function copyJson(event) {
  event?.stopPropagation();
  await navigator.clipboard.writeText($("jsonOutput").textContent);
  $("statusPill").textContent = "JSON copied";
  window.setTimeout(() => {
    $("statusPill").textContent = "Ready";
  }, 1400);
}

async function shareCurrentSearch() {
  const intentText = $("intentInput").value.trim() || "想喝一杯好喝的調酒，舒服一點";
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
    $("statusPill").textContent = "Link copied";
    window.setTimeout(() => {
      $("statusPill").textContent = "Ready";
    }, 1400);
  }
}

function initializeFromUrl() {
  const state = readUrlState();
  const hasSharedState = Boolean(state.intentText || state.city || state.area || state.radius);

  if (!hasSharedState) {
    loadSample();
    return;
  }

  const selectedCity = cityCatalog.some((city) => city.id === state.city)
    ? state.city
    : cityCatalog[0].id;
  $("citySelect").value = selectedCity;
  renderAreaOptions(selectedCity, state.area);

  if (state.radius && [...$("radiusSelect").options].some((option) => option.value === state.radius)) {
    $("radiusSelect").value = state.radius;
  }

  $("intentInput").value = state.intentText || "想喝一杯好喝的調酒，舒服一點";
  $("landingIntentInput").value = $("intentInput").value;
  openFinderInterface({ scroll: false });
  runRecommendation();
}

function openFinderInterface({ scroll = true } = {}) {
  $("finderInterface")?.classList.add("is-open");
  if (scroll) {
    $("finderInterface")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function enterFinderFromChat() {
  const chatText = $("landingIntentInput")?.value.trim();
  if (chatText) $("intentInput").value = chatText;
  openFinderInterface();
  runRecommendation();
}

function bindEvents() {
  $("landingIntentInput")?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.shiftKey) return;
    event.preventDefault();
    enterFinderFromChat();
  });
  $("recommendBtn").addEventListener("click", runRecommendation);
  $("sampleBtn").addEventListener("click", loadSample);
  $("clearBtn").addEventListener("click", clearIntent);
  $("copyBtn").addEventListener("click", copyJson);
  $("shareBtn").addEventListener("click", shareCurrentSearch);
  $("citySelect").addEventListener("change", () => {
    renderAreaOptions($("citySelect").value);
    runRecommendation();
  });
  $("areaSelect").addEventListener("change", runRecommendation);
  $("radiusSelect").addEventListener("change", runRecommendation);
  $("intentInput").addEventListener("input", () => {
    $("statusPill").textContent = "Edited";
  });
}

bindEvents();
renderCityOptions();
renderQuickIntents();
renderTaxonomy();
initializeFromUrl();
