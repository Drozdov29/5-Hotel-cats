ymaps.ready(init);

  function init () {
    var myMap = new ymaps.Map("map", {
      center: [59.93863106417265,30.3230545], // Центр карты, указываем коордианты
      zoom: 17,                   // Масштаб, тут все просто
      controls: ["zoomControl"],  // Отключаем все элементы управления
      behaviors: ["drag"]
    });

    var myGeoObjects = [];
      myGeoObjects = new ymaps.Placemark([59.93863106417265,30.3230545],{
      balloonContentBody: 'HTML Academy: Кэт Энерджи',},{
      iconLayout: 'default#image',
     // Путь до нашей картинки
      iconImageHref: '../img/icon-map-cat.svg',
      // Размер по ширине и высоте
      iconImageSize: [27, 49],
      // Смещение левого верхнего угла иконки относительно её «ножки» (точки привязки).
      conImageOffset: [-30, -40]
})}

      // var clusterer = new ymaps.Clusterer({
      //     clusterDisableClickZoom: false,
      //     clusterOpenBalloonOnClick: false,
      // });

      // clusterer.add(myGeoObjects);
      // myMap.geoObjects.add(clusterer);
      // myMap.behaviors.disable('scrollZoom'); // Отлючаем возможность изменения масштаба
