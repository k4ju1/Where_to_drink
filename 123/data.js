(function () {
  const cities = [
    {
      id: "shanghai",
      label: "上海",
      countryCode: "CN",
      dianpingCityId: 1,
      defaultArea: "新天地",
      areas: ["靜安寺", "新天地", "外灘", "徐家匯", "巨鹿路", "愚園路", "陸家嘴", "人民廣場", "淮海中路", "五角場"],
      areaCoordinates: {
        靜安寺: { latitude: 31.223, longitude: 121.446 },
        新天地: { latitude: 31.219, longitude: 121.475 },
        外灘: { latitude: 31.239, longitude: 121.49 },
        徐家匯: { latitude: 31.184, longitude: 121.437 },
        巨鹿路: { latitude: 31.222, longitude: 121.459 },
        愚園路: { latitude: 31.224, longitude: 121.431 },
        陸家嘴: { latitude: 31.239, longitude: 121.503 },
        人民廣場: { latitude: 31.231, longitude: 121.475 },
        淮海中路: { latitude: 31.221, longitude: 121.463 },
        五角場: { latitude: 31.303, longitude: 121.514 },
      },
    },
    {
      id: "beijing",
      label: "北京",
      countryCode: "CN",
      dianpingCityId: 2,
      defaultArea: "三里屯",
      areas: ["三里屯", "工體", "國貿", "鼓樓", "望京", "亮馬橋", "朝陽大悅城", "五道口", "前門", "798"],
      areaCoordinates: {
        三里屯: { latitude: 39.936, longitude: 116.447 },
        工體: { latitude: 39.929, longitude: 116.443 },
        國貿: { latitude: 39.909, longitude: 116.46 },
        鼓樓: { latitude: 39.94, longitude: 116.397 },
        望京: { latitude: 39.996, longitude: 116.481 },
        亮馬橋: { latitude: 39.949, longitude: 116.468 },
        朝陽大悅城: { latitude: 39.925, longitude: 116.518 },
        五道口: { latitude: 39.992, longitude: 116.337 },
        前門: { latitude: 39.899, longitude: 116.397 },
        798: { latitude: 39.984, longitude: 116.497 },
      },
    },
    {
      id: "shenzhen",
      label: "深圳",
      countryCode: "CN",
      dianpingCityId: 7,
      defaultArea: "福田CBD",
      areas: ["福田CBD", "南山", "蛇口", "華僑城", "羅湖", "車公廟", "海岸城", "深圳灣", "前海", "寶安中心"],
      areaCoordinates: {
        福田CBD: { latitude: 22.543, longitude: 114.058 },
        南山: { latitude: 22.532, longitude: 113.93 },
        蛇口: { latitude: 22.487, longitude: 113.919 },
        華僑城: { latitude: 22.539, longitude: 113.982 },
        羅湖: { latitude: 22.548, longitude: 114.127 },
        車公廟: { latitude: 22.537, longitude: 114.025 },
        海岸城: { latitude: 22.517, longitude: 113.935 },
        深圳灣: { latitude: 22.509, longitude: 113.944 },
        前海: { latitude: 22.543, longitude: 113.895 },
        寶安中心: { latitude: 22.555, longitude: 113.883 },
      },
    },
    {
      id: "hangzhou",
      label: "杭州",
      countryCode: "CN",
      dianpingCityId: 3,
      defaultArea: "湖濱",
      areas: ["湖濱", "武林", "濱江", "西溪", "城西", "黃龍", "城站", "錢江新城", "拱墅", "西湖文化廣場"],
      areaCoordinates: {
        湖濱: { latitude: 30.256, longitude: 120.166 },
        武林: { latitude: 30.276, longitude: 120.16 },
        濱江: { latitude: 30.209, longitude: 120.211 },
        西溪: { latitude: 30.266, longitude: 120.067 },
        城西: { latitude: 30.286, longitude: 120.093 },
        黃龍: { latitude: 30.272, longitude: 120.132 },
        城站: { latitude: 30.246, longitude: 120.178 },
        錢江新城: { latitude: 30.242, longitude: 120.212 },
        拱墅: { latitude: 30.319, longitude: 120.141 },
        西湖文化廣場: { latitude: 30.279, longitude: 120.165 },
      },
    },
    {
      id: "hongkong",
      label: "香港",
      countryCode: "HK",
      defaultArea: "中環",
      areas: ["中環", "上環", "蘭桂坊", "蘇豪", "金鐘", "灣仔", "銅鑼灣", "尖沙咀", "西九龍", "旺角", "堅尼地城", "太古坊"],
      areaCoordinates: {
        中環: { latitude: 22.281, longitude: 114.158 },
        上環: { latitude: 22.286, longitude: 114.151 },
        蘭桂坊: { latitude: 22.281, longitude: 114.155 },
        蘇豪: { latitude: 22.282, longitude: 114.151 },
        金鐘: { latitude: 22.279, longitude: 114.165 },
        灣仔: { latitude: 22.277, longitude: 114.173 },
        銅鑼灣: { latitude: 22.28, longitude: 114.185 },
        尖沙咀: { latitude: 22.298, longitude: 114.172 },
        西九龍: { latitude: 22.304, longitude: 114.161 },
        旺角: { latitude: 22.319, longitude: 114.17 },
        堅尼地城: { latitude: 22.283, longitude: 114.129 },
        太古坊: { latitude: 22.286, longitude: 114.213 },
      },
    },
  ];

  const manualBars = [
    /*
      Add real bars here when you want the second/manual source.

      {
        id: "shanghai_xintiandi_real_001",
        city: "shanghai",
        cityLabel: "上海",
        area: "新天地",
        name: "Actual Bar Name",
        title: "Actual Bar Name",
        price: "$$",
        distances: { 靜安寺: 2.1, 新天地: 0.4, 外灘: 2.8, 徐家匯: 4.7, 巨鹿路: 1.7, 愚園路: 2.8 },
        reviews: [
          "安靜聊天，調酒師會按口味推薦",
          "燈光昏暗，適合約會"
        ],
        placeUrl: "https://maps.google.com/...",
        source: "manual",
        realWorld: {
          address: "street address",
          lastVerified: "2026-07-09"
        }
      }
    */
  ];

  window.BAR_DATA = {
    cities,
    bars: manualBars,
  };
})();
