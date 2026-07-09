(function () {
  const cities = [
    {
      id: "shanghai",
      label: "上海",
      dianpingCityId: 1,
      defaultArea: "新天地",
      areas: ["靜安寺", "新天地", "外灘", "徐家匯", "巨鹿路"],
    },
    {
      id: "beijing",
      label: "北京",
      dianpingCityId: 2,
      defaultArea: "三里屯",
      areas: ["三里屯", "工體", "國貿", "鼓樓", "望京"],
    },
    {
      id: "shenzhen",
      label: "深圳",
      dianpingCityId: 7,
      defaultArea: "福田CBD",
      areas: ["福田CBD", "南山", "蛇口", "華僑城", "羅湖"],
    },
    {
      id: "hangzhou",
      label: "杭州",
      dianpingCityId: 3,
      defaultArea: "湖濱",
      areas: ["湖濱", "武林", "濱江", "西溪", "城西"],
    },
  ];

  const areaOffsets = {
    靜安寺: 0.6,
    新天地: 0.4,
    外灘: 0.9,
    徐家匯: 1.2,
    巨鹿路: 0.8,
    三里屯: 0.5,
    工體: 0.7,
    國貿: 1.3,
    鼓樓: 1.5,
    望京: 1.8,
    福田CBD: 0.4,
    南山: 1.2,
    蛇口: 1.5,
    華僑城: 1.1,
    羅湖: 1.6,
    湖濱: 0.5,
    武林: 0.8,
    濱江: 1.4,
    西溪: 1.7,
    城西: 1.3,
  };

  function makeDianpingSearchUrl(city, title) {
    return `https://www.dianping.com/search/keyword/${city.dianpingCityId}/0_${encodeURIComponent(title)}`;
  }

  const concepts = [
    {
      suffix: "Signal Room",
      price: "$$",
      reviews: [
        "週五晚上很熱鬧，DJ 和電子樂都在線，適合想 high 的晚上",
        "舞池不大但氣氛很滿，朋友來了很快就能進狀態",
        "音樂偏大，不適合安靜聊天，但想吵鬧點會很爽",
      ],
    },
    {
      suffix: "Quiet Lab",
      price: "$$",
      reviews: [
        "音量剛好，很適合兩三個朋友安靜聊天，沙發坐起來舒服",
        "bartender 會問口味再推薦，特調不浮誇但很穩",
        "不趕人，一個人坐吧台也自在",
      ],
    },
    {
      suffix: "Archive",
      price: "$$$",
      reviews: [
        "威士忌和 gin 的收藏完整，酒單厚到可以慢慢看",
        "老闆很懂酒，會根據預算和口味推薦",
        "座位不多，氣氛安靜，適合認真喝一杯",
      ],
    },
    {
      suffix: "Rooftop",
      price: "$$$",
      reviews: [
        "天台夜景漂亮，窗景很開闊，帶朋友來拍照很有面子",
        "週末人多很熱鬧，適合想要景觀和氣氛的晚上",
        "酒普通而且偏貴，主要是買景觀",
      ],
    },
    {
      suffix: "Tap Alley",
      price: "$",
      reviews: [
        "精釀啤酒選擇多，happy hour 很划算，氣氛隨性",
        "有大桌可以訂位，朋友聚會不用太拘束",
        "店員友善，偶爾可以帶狗坐戶外位置",
      ],
    },
    {
      suffix: "Velvet Door",
      price: "$$$",
      reviews: [
        "藏在巷子裡沒有招牌，推開暗門才是入口，speakeasy 感很強",
        "燈光昏暗，適合約會，調酒特調很有創意",
        "價格偏貴，但儀式感很足",
      ],
    },
    {
      suffix: "Blue Hour Jazz",
      price: "$$",
      reviews: [
        "晚上有爵士 live band，現場音樂很穩，氣氛成熟",
        "燈光昏暗，可以安靜聽歌，也適合約會",
        "威士忌選擇不少，bartender 對酒很懂",
      ],
    },
    {
      suffix: "Porch & Paws",
      price: "$$",
      reviews: [
        "寵物友善，可以帶狗坐露台，店員會給水碗",
        "啤酒和簡單調酒都有，價格合理，晚上很 chill",
        "空間不算大，不太適合很多人聚會",
      ],
    },
    {
      suffix: "Neon Box",
      price: "$$",
      reviews: [
        "燈光和音響都很炸，週末人很多，想找牛逼點的場子可以來",
        "DJ 播得很滿，跳舞氣氛比一般 lounge 更強",
        "跟朋友講話基本要靠喊，聊天需求就別選這裡",
      ],
    },
    {
      suffix: "Green Seat",
      price: "$",
      reviews: [
        "價格合理，happy hour 酒單划算，適合下班隨便喝一杯",
        "服務親切，啤酒和簡單調酒都有",
        "氣氛舒服但不吵，一個人坐著也自在",
      ],
    },
    {
      suffix: "Compass",
      price: "$$$",
      reviews: [
        "調酒師會根據今天心情客製，每杯特調都有故事",
        "吧台互動很好，bartender 專業又能聊",
        "燈光很美，適合帶曖昧對象來",
      ],
    },
    {
      suffix: "Courtyard",
      price: "$$",
      reviews: [
        "院子位置舒服，朋友小聚很適合，可以提前訂位",
        "店員友善，調酒穩定，整體不趕人",
        "週末人會多，但還能正常聊天",
      ],
    },
    {
      suffix: "Bassline",
      price: "$$",
      reviews: [
        "低音很重，電子樂很嗨，越晚越像小派對",
        "舞池擠但氣氛好，適合想喝完繼續蹦",
        "音樂太轟，完全不適合約會聊天",
      ],
    },
    {
      suffix: "Sake Shelf",
      price: "$$$",
      reviews: [
        "清酒和烈酒選擇很完整，店員會按口味推薦",
        "空間安靜，適合慢慢喝，不太適合大聲聚會",
        "價格不便宜，但酒單很有深度",
      ],
    },
    {
      suffix: "Window Seat",
      price: "$$",
      reviews: [
        "窗景很好，黃昏時段很美，約會氛圍自然",
        "特調清爽，服務親切，音量不會壓過聊天",
        "座位不多，最好提前訂位",
      ],
    },
    {
      suffix: "Garage Tap",
      price: "$",
      reviews: [
        "啤酒便宜，精釀選擇多，大家站著聊天很隨性",
        "適合一群朋友熱鬧聚會，店員也很友善",
        "環境比較粗獷，不是浪漫約會路線",
      ],
    },
    {
      suffix: "Listening Room",
      price: "$$$",
      reviews: [
        "黑膠和小編制 live 很舒服，音量剛好不壓過聊天",
        "調酒偏經典，bartender 會按今天想聽的歌推薦一杯",
        "燈光低、座位距離剛好，約會或兩個人慢慢喝都合適",
        "不是蹦迪場，想找熱鬧派對會覺得太安靜",
      ],
    },
    {
      suffix: "Highball Station",
      price: "$",
      reviews: [
        "highball 和啤酒都很順，happy hour 價格真的划算",
        "吧台服務快，店員會推薦新手容易入口的口味",
        "下班後一群朋友站著喝也不尷尬，氣氛輕鬆",
        "調酒不算複雜，但想隨便喝一杯很穩",
      ],
    },
    {
      suffix: "Agave Den",
      price: "$$",
      reviews: [
        "tequila 和 mezcal 選擇很多，烈酒控可以慢慢問 bartender",
        "入口有點隱藏，推門後是偏昏暗的 speakeasy 感",
        "特調帶煙燻和辣味，創意很強但不會亂做",
        "小食份量不大，主要還是來喝酒聊天",
      ],
    },
    {
      suffix: "Vinyl & Smoke",
      price: "$$$",
      reviews: [
        "威士忌收藏深，老闆會按預算和桶味慢慢介紹",
        "空間安靜，有木質香和黑膠聲，適合認真喝一杯",
        "價格偏高，但酒單厚度和服務都對得起",
        "座位不多，週末最好提前訂位",
      ],
    },
    {
      suffix: "Patio House",
      price: "$$",
      reviews: [
        "露台很舒服，可以帶狗，店員還會主動拿水碗",
        "朋友小聚有大桌，提前訂位會比較穩",
        "啤酒、簡單調酒和下酒菜都有，氣氛很 chill",
        "雨天露台體驗會打折，室內位置比較少",
      ],
    },
    {
      suffix: "Aperitivo Club",
      price: "$$",
      reviews: [
        "自然酒和低酒精調酒都好喝，女生聚會或約會很友好",
        "tapas 小食比想像中認真，適合邊吃邊喝",
        "服務很親切，會按酸甜和酒感推薦",
        "不是很吵，聊天氛圍比一般 lounge 更舒服",
      ],
    },
    {
      suffix: "Game Room",
      price: "$",
      reviews: [
        "有飛鏢和桌遊，朋友聚會不用冷場，週末很熱鬧",
        "啤酒便宜，買一送一時性價比很高",
        "音樂和笑聲都偏大，想安靜聊天不太適合",
        "店員很會帶氣氛，新手來也不拘束",
      ],
    },
    {
      suffix: "Night Kitchen Bar",
      price: "$$",
      reviews: [
        "營業到很晚，續攤不用趕，宵夜小食也能墊肚子",
        "後半夜 DJ 會上來，氣氛越晚越嗨",
        "調酒穩定，gin tonic 和 signature 都不踩雷",
        "太晚去人會多，吧台位要碰運氣",
      ],
    },
  ];

  const conceptGroupsByArea = [
    [0, 1, 2, 3, 17, 21],
    [8, 4, 5, 10, 18, 22],
    [3, 12, 14, 13, 16, 19],
    [6, 15, 11, 7, 20, 23],
    [0, 9, 2, 10, 16, 21],
  ];

  function distanceFor(city, homeArea, targetArea, conceptIndex) {
    if (homeArea === targetArea) {
      return +(0.25 + ((conceptIndex % 6) * 0.18)).toFixed(1);
    }

    const from = city.areas.indexOf(homeArea);
    const to = city.areas.indexOf(targetArea);
    const hopDistance = Math.abs(from - to) * 1.15;
    const offset = (areaOffsets[targetArea] || 1) + (conceptIndex % 4) * 0.23;
    return +(hopDistance + offset).toFixed(1);
  }

  function makeBars() {
    const bars = [];

    cities.forEach((city) => {
      city.areas.forEach((area, areaIndex) => {
        const selectedConcepts = conceptGroupsByArea[areaIndex].map((conceptIndex) => concepts[conceptIndex]);
        selectedConcepts.forEach((concept, conceptIndex) => {
          const absoluteIndex = areaIndex * selectedConcepts.length + conceptIndex + 1;
          const title = `${area} ${concept.suffix}`;
          const distances = Object.fromEntries(
            city.areas.map((candidateArea) => [
              candidateArea,
              distanceFor(city, area, candidateArea, absoluteIndex),
            ]),
          );

          bars.push({
            id: `${city.id}_${String(areaIndex + 1).padStart(2, "0")}_${String(conceptIndex + 1).padStart(2, "0")}`,
            city: city.id,
            cityLabel: city.label,
            area,
            name: title,
            title,
            dianpingUrl: makeDianpingSearchUrl(city, title),
            price: concept.price,
            distances,
            reviews: concept.reviews,
          });
        });
      });
    });

    return bars;
  }

  window.BAR_DATA = {
    cities,
    bars: makeBars(),
  };
})();
