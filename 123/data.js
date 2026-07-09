(function () {
  const cities = [
    {
      id: "shanghai",
      label: "上海",
      countryCode: "CN",
      dianpingCityId: 1,
      defaultArea: "新天地",
      areas: ["靜安寺", "新天地", "外灘", "徐家匯", "巨鹿路"],
      areaCoordinates: {
        靜安寺: { latitude: 31.223, longitude: 121.446 },
        新天地: { latitude: 31.219, longitude: 121.475 },
        外灘: { latitude: 31.239, longitude: 121.49 },
        徐家匯: { latitude: 31.184, longitude: 121.437 },
        巨鹿路: { latitude: 31.222, longitude: 121.459 },
      },
    },
    {
      id: "beijing",
      label: "北京",
      countryCode: "CN",
      dianpingCityId: 2,
      defaultArea: "三里屯",
      areas: ["三里屯", "工體", "國貿", "鼓樓", "望京"],
      areaCoordinates: {
        三里屯: { latitude: 39.936, longitude: 116.447 },
        工體: { latitude: 39.929, longitude: 116.443 },
        國貿: { latitude: 39.909, longitude: 116.46 },
        鼓樓: { latitude: 39.94, longitude: 116.397 },
        望京: { latitude: 39.996, longitude: 116.481 },
      },
    },
    {
      id: "shenzhen",
      label: "深圳",
      countryCode: "CN",
      dianpingCityId: 7,
      defaultArea: "福田CBD",
      areas: ["福田CBD", "南山", "蛇口", "華僑城", "羅湖"],
      areaCoordinates: {
        福田CBD: { latitude: 22.543, longitude: 114.058 },
        南山: { latitude: 22.532, longitude: 113.93 },
        蛇口: { latitude: 22.487, longitude: 113.919 },
        華僑城: { latitude: 22.539, longitude: 113.982 },
        羅湖: { latitude: 22.548, longitude: 114.127 },
      },
    },
    {
      id: "hangzhou",
      label: "杭州",
      countryCode: "CN",
      dianpingCityId: 3,
      defaultArea: "湖濱",
      areas: ["湖濱", "武林", "濱江", "西溪", "城西"],
      areaCoordinates: {
        湖濱: { latitude: 30.256, longitude: 120.166 },
        武林: { latitude: 30.276, longitude: 120.16 },
        濱江: { latitude: 30.209, longitude: 120.211 },
        西溪: { latitude: 30.266, longitude: 120.067 },
        城西: { latitude: 30.286, longitude: 120.093 },
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
        distances: { 靜安寺: 2.1, 新天地: 0.4, 外灘: 2.8, 徐家匯: 4.7, 巨鹿路: 1.7 },
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
