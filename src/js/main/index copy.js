import '../../scss/main/style.scss';
import '../../assets/images/favicons/android-chrome-192x192.png';
import '../../assets/images/favicons/android-chrome-512x512.png';
import './client.js';

const $ = require('jquery');

$(document).ready(function() {
  const test = 'test';

  console.log(test);

  let arrServces = [];
  // выбор подарка
  $('.action__form-button').click(function() {
    $('.modal-form-data').attr('value', 'Кнопка - заказать диагностику');
  });

  $('.contacts__form-button').click(function() {
    $('.modal-form-data').attr('value', 'Кнопка - оставить заявку - футер');
  });

  // $('.gifts-form__button__service_true').click(function() {
  //   const dataForm = $('.form-block__input').val();
  //   $('.modal-form-service').attr('value', JSON.stringify(arrServces));
  // });

  let curModalInfo = $(
    '.card-gift__border_no-opacity .card-gift__desc-text'
  ).text();
  $('.modal-form-gifts').attr('value', curModalInfo);
  $('.card-gift').click(function() {
    curModalInfo = $('.card-gift__desc-text', this).text();

    $('.modal-form-gifts').attr('value', curModalInfo);

    // console.log(curModalInfo);

    $('.card-gift').removeClass(
      'card-gift__border_no-opacity card-gift__number__display_none'
    );
    $('.card-gift .card-gift__number').removeClass(
      'card-gift__number__display_none'
    );
    $('.card-gift ul').addClass('card-gift__ul-choose__display_none');
    $(this).addClass('card-gift__border_no-opacity');
    $('ul', this).removeClass('card-gift__ul-choose__display_none');
    $('.card-gift__number', this).addClass('card-gift__number__display_none');
  });

  const currenWokersList = [
    'bondarec',
    'latipov',
    'ponomarev',
    'siromyatnikov',
    'sviderskiy',
    'tenkov',
  ];
  let currentNumWorker = 0;

  const wokers = {
    latipov: [
      'Латыпов Тимур',
      'Механик',
      '35 лет',
      'Опыт работы с Land Rover 10 лет',
      'Количество нормо - часов за прошлый год:',
      '2421',
      'Любимая модель Ленд Ровер',
      'Land Rover Discovery Sport 2.0D 180hp',
    ],
    bondarec: [
      'Бондарец Сергей',
      'Механик',
      '32 года',
      'Опыт работы с Land Rover 8 лет',
      'Количество нормо - часов за прошлый год:',
      '2619',
      'Любимая модель Ленд Ровер',
      'Range Rover Sport 2 3.0SC 340hp',
    ],

    ponomarev: [
      'Пономарев Владислав',
      'Руководитель сервиса',
      '28 лет',
      'Опыт работы с Land Rover 6 лет',
      'Количество согласованных часов за прошлый год:',
      '9860',
      'Любимая модель Ленд Ровер',
      'Range Rover L405 4.4d 339hp',
    ],

    siromyatnikov: [
      'Сыромятников Станислав',
      'Старший механик',
      '37 лет',
      'Опыт работы с Land Rover 12 лет',
      'Количество нормо - часов за прошлый год:',
      '3012',
      'Любимая модель Ленд Ровер',
      'Range Rover 3 5.0SC 510hp',
    ],

    sviderskiy: [
      'Свидерский Андрей',
      'Мастер - приемщик',
      '37 лет',
      'Опыт работы с Land Rover 10 лет',
      'Количество согласованных часов за прошлый год:',
      '8244',
      'Любимая модель Ленд Ровер',
      'Land Rover Discovery 4 3.0d 245hp',
    ],
    tenkov: [
      'Теньков Алексей',
      'Механик',
      '35 лет',
      'Опыт работы с Land Rover 7 лет',
      'Количество нормо - часов за прошлый год:',
      '2527',
      'Любимая модель Ленд Ровер',
      'Land Rover Freelander 2.2d 190hp',
    ],
  };

  function changePersonalInfo($idName) {
    // изменяем информацию
    $('.personal-preview__name').text(`${wokers[$idName][0]}`);
    $('.personal-preview__vacancy').text(
      `${wokers[$idName][1]} / ${wokers[$idName][2]}`
    );
    $('.personal-preview__experience').text(`${wokers[$idName][3]}`);
    $('.personal-preview__add-text__first-feature').html(
      `${wokers[$idName][4]}<br>${wokers[$idName][5]}<br><br>`
    );
    $('.personal-preview__add-text__second-feature').text(
      `${wokers[$idName][6]} — ${wokers[$idName][7]}`
    );

    // меняем фото
    $('.personal-preview__img-wrap > img').attr(
      'src',
      `/assets/images/pages/home/img__team-person-${$idName}.jpg`
    );
  }

  function setCurrentNumWorker($idName) {
    currentNumWorker = currenWokersList.indexOf($idName);
  }

  function setRedBorder(context) {
    $('.team__preview-circle').removeClass('team__preview-circle__border_true');
    $(context).addClass('team__preview-circle__border_true');
  }

  // галерея - сотрудники
  $('.team__preview-circle').click(function() {
    changePersonalInfo(this.id);
    setCurrentNumWorker(this.id);

    setRedBorder(this);
    // console.log(currentNumWorker);
  });

  // стрелки
  $(
    '.personal-preview__arrow__position_left, .personal-preview__arrow-svg__left_true'
  ).click(function() {
    if (currentNumWorker === 0) {
      currentNumWorker = 6;
    }
    currentNumWorker -= 1;
    changePersonalInfo(currenWokersList[currentNumWorker]);

    const context = `#${currenWokersList[currentNumWorker]}`;
    setRedBorder($(context));
    // console.log(currentNumWorker);
  });

  $(
    '.personal-preview__arrow__position_right, .personal-preview__arrow-svg__right_true'
  ).click(function() {
    if (currentNumWorker === 5) {
      currentNumWorker = -1;
    }
    currentNumWorker += 1;
    changePersonalInfo(currenWokersList[currentNumWorker]);

    const context = `#${currenWokersList[currentNumWorker]}`;
    setRedBorder($(context));
    // console.log(currentNumWorker);
  });

  $('#checkbox-service-01').prop('checked', true);
  $('#checkbox-service-02').prop('checked', true);
  let cntCheckedServices = 2;

  function setArrServices() {
    arrServces = [];
    $('.service__choose-item-text').each(function() {
      arrServces.push($(this).text());
    });
  }
  setArrServices();

  // услуги
  $('.service__form-card-checkbox').click(function() {
    const curIdName = this.id;
    const curNumElement = curIdName.slice(-1);
    if ($(this).is(':checked')) {
      cntCheckedServices += 1;
      $(this)
        .parent('.service__card-form')
        .next('.service__white-background')
        .addClass('service__white-background__visibility_hidden');

      $(this)
        .next('.service__form-text-checkbox')
        .text('выбрано');
      const serviceText = $(this)
        .closest('.service__cards-wrap-item')
        .find('.service__form-card-label')
        .text();
      $('.service__choose-list').append(
        `<div class="service__choose-item-wrap" id="service_0${curNumElement}"><p class="service__choose-item-text">${serviceText}</p><div class="service__choose-item-number-wrap"><p class="service__choose-item-number">0${cntCheckedServices}</p></div></div>`
      );
    }
    // удаление
    else {
      cntCheckedServices -= 1;
      $(this)
        .next('.service__form-text-checkbox')
        .text('выбрать');
      $(this)
        .parent('.service__card-form')
        .next('.service__white-background')
        .removeClass('service__white-background__visibility_hidden');
      $(`#service_0${curNumElement}`).remove();
    }
    $('.service__span-cnt-sevices').text(cntCheckedServices);

    setArrServices();
  });

  // Open/close modal
  // $(
  //   '.action__form-button, .modal__form__close-text-wrap, .modal__form__close-icon, .contacts__form-button'
  // ).click(function() {
  //   $('.modal-wrapper').toggleClass(
  //     'modal-wrapper__active modal-wrapper__inactive'
  //   );

  // $('.open-modal-ask').click(function() {
  //   $('.modal__form-service').val($(this).attr('data-service'));
  //   $('.modal_active').toggleClass('modal_active modal_inactive');
  //   $('.modal-ask').toggleClass('modal_active modal_inactive');
  // });
  // $('.open-modal-callback').click(function() {
  //   $('.modal__form-service').val($(this).attr('data-service'));
  //   $('.modal_active').toggleClass('modal_active modal_inactive');
  //   $('.modal-callback').toggleClass('modal_active modal_inactive');
  // });
  // $('.close').click(function() {
  //   $('.modal_active').toggleClass('modal_active modal_inactive');
  // });
  // $('body').keydown(function(e) {
  //   if (e.keyCode == 27) {
  //     $('.modal_active').toggleClass('modal_active modal_inactive');
  //   }
  // });
  // });

  // $('form').submit(function() {
  //   // Check required fields
  //   const allRequiredFields = $(this).find('input[required]');
  //   let flagEmpty = false;
  //   allRequiredFields.each(function(indx, element) {
  //     if ($(element).val() === '') flagEmpty = true;
  //   });
  //   if (flagEmpty) {
  //     alert('Заполните поля формы!');
  //     return false;
  //   }

  // Get UTM function
  // function getUTM(name) {
  //   const target = location.search.match(new RegExp(`${name}=([^&]+)`));
  //   return target ? target[1] : 'Не используется';
  // }

  // Call get UTM function
  // $('.utm_medium').val(getUTM('utm_medium'));
  // $('.utm_source').val(getUTM('utm_source'));
  // $('.utm_campaign').val(getUTM('utm_campaign'));
  // $('.utm_term').val(getUTM('utm_term'));
  // $('.utm_content').val(getUTM('utm_content'));

  // // Scroll to id function
  // function scrollToId(navigationClass) {
  // 	$(navigationClass).click(function () {
  // 		var targetUrl = $(this).attr('href');
  // 		var targetDest = $(targetUrl).offset().top;
  // 		$('html, body').animate({scrollTop: targetDest}, 300);
  // 		return false;
  // 	});
  // }

  // // Call Scroll to id
  // scrollToId('.main-menu__link');

  // // Calc raiting
  // if($('section').is('.reviews')) {
  // 	var raitingSum = 0;
  // 	var raitingAvg = 0;
  // 	var raitingCount = $('[itemprop="ratingValue"]').length;
  // 	$('[itemprop="ratingValue"]').each(function() {
  // 		raitingSum += Number.parseInt($(this).text());
  // 	});
  // 	raitingAvg = Math.round((raitingSum / raitingCount) * 10) / 10;
  // 	$('.reviews__org-raiting').text(raitingAvg);
  // 	$('.reviews__org-count').text(raitingCount);
  // }

  // Yandex map

  // let contactMap;
  // function init() {
  //   contactMap = new ymaps.Map('contactsMap', {
  //     // http://dimik.github.io/ymaps/examples/location-tool/
  //     center: [55.79665307, 37.596462],
  //     zoom: 15,
  //     controls: [],
  //   });
  //   contactMap.controls.add('zoomControl', {
  //     float: 'none',
  //     position: {
  //       left: 10,
  //       top: 140,
  //     },
  //   });
  //   contactMap.behaviors
  //     .enable(['drag', 'rightMouseButtonMagnifier'])
  //     .disable('scrollZoom');

  //   // Pin param
  //   const contactPin = new ymaps.Placemark(
  //     [55.79665307, 37.596462],
  //     {
  //       balloonContentHeader: 'Сервис Ленд Ровер LR-Avangard',
  //       balloonContentBody:
  //         '<p>Специализированный сервис Ленд Ровер в Москве</p>',
  //       hintContent: 'Сервис Ленд Ровер LR-Avangard',
  //     },
  //     {
  //       iconLayout: 'default#image',
  //       iconImageHref: '/images/common/img__map-pin.svg',
  //       iconImageSize: [142, 58],
  //       iconImageOffset: [-90, -62],
  //     }
  //   );

  //   if ($('div').is('#contactsMap')) {
  //     ymaps.ready(init);
  //   }

  //   // Add to map
  //   contactMap.geoObjects.add(contactPin);
  // }

  // IMG drag none
  $('img, a').on('dragstart', function() {
    return false;
  });
}); // End ready
