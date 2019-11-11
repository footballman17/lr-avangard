import ymaps from 'ymaps';

export default function yandexMap() {
  let contactMap = null;

  ymaps
    .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
    .then(maps => {
      contactMap = new maps.Map('contactsMap', {
        // http://dimik.github.io/ymaps/examples/location-tool/
        center: [55.79665307, 37.596462],
        zoom: 15,
        controls: [],
      });
      contactMap.controls.add('zoomControl', {
        float: 'none',
        position: {
          left: 10,
          top: 140,
        },
      });
      contactMap.behaviors
        .enable(['drag', 'rightMouseButtonMagnifier'])
        .disable('scrollZoom');

      // Pin param
      const contactPin = new maps.Placemark(
        [55.79665307, 37.596462],
        {
          balloonContentHeader: 'Сервис Ленд Ровер LR-Avangard',
          balloonContentBody:
            '<p>Специализированный сервис Ленд Ровер в Москве</p>',
          hintContent: 'Сервис Ленд Ровер LR-Avangard',
        },
        {
          iconLayout: 'default#image',
          iconImageHref: './assets/images/common/img__map-pin.svg',
          iconImageSize: [142, 58],
          iconImageOffset: [-90, -62],
        }
      );

      contactMap.geoObjects.add(contactPin);
    })
    .catch(error => console.log('Failed to load Yandex Maps', error));
}
