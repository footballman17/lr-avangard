import $ from 'jquery';

$(document).ready(function() {
  // // Form
  // $('form').submit(function() {
  // 	// Check required fields
  // 	var allRequiredFields = $(this).find('input[required]');
  // 	var flagEmpty = false;
  // 	allRequiredFields.each(function(indx, element) {
  // 		if ($(element).val() == '') flagEmpty = true;
  // 	});
  // 	if (flagEmpty) {
  // 		alert('Заполните поля формы!');
  // 		return false;
  // 	}
  // 	// E-mail Ajax Send
  // 	else {
  // 		var th = $(this);
  // 		$.ajax({
  // 			type: 'POST',
  // 			url: '/js/order.php',
  // 			data: th.serialize()
  // 		}).done(function() {
  // 			// Go to Thanks page
  // 			$(location).attr('href', '/thankyou.html');
  // 			// Open Thanks window
  // 			// alert('Заявка успешно отправлена! В ближайшее время наш менеджер свяжется с Вами.');
  // 			// setTimeout(function() {
  // 			// 	// Done Functions
  // 			// 	$('.modal-form').css('display', 'none');
  // 			// 	th.trigger('reset');
  // 			// }, 1000);
  // 		});
  // 		return false;
  // 	}
  // });

  // // Get UTM function
  // function getUTM(name) {
  // 	var target = location.search.match(
  // 		new RegExp(name+'=([^&]+)')
  // 	);
  // 	return target ? target[1] : 'Не используется';
  // }

  // // Call get UTM function
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
  if ($('div').is('#contactsMap')) {
    ymaps.ready(init);
  }
  let contactMap;
  function init() {
    contactMap = new ymaps.Map('contactsMap', {
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
    const contactPin = new ymaps.Placemark(
      [55.79665307, 37.596462],
      {
        balloonContentHeader: 'Сервис Ленд Ровер LR-Avangard',
        balloonContentBody:
          '<p>Специализированный сервис Ленд Ровер в Москве</p>',
        hintContent: 'Сервис Ленд Ровер LR-Avangard',
      },
      {
        iconLayout: 'default#image',
        iconImageHref: '/images/common/img__map-pin.svg',
        iconImageSize: [142, 58],
        iconImageOffset: [-90, -62],
      }
    );

    // Add to map
    contactMap.geoObjects.add(contactPin);
  }

  // // IMG drag none
  // $('img, a').on('dragstart', function(event) {
  // 	return false;
  // });
}); // End ready
