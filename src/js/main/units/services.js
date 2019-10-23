const $ = require('jquery');

const servicesHandleObject = {
  cntCheckedServices: 2,

  // установить обработчик на переключатель карточки-услуги
  addClickHandle() {
    $('.service__form-card-checkbox').click(function() {
      const currentElement = $(this);
      if (currentElement.attr('checked') === 'checked') {
        servicesHandleObject.switchOffService(currentElement);
      } else {
        servicesHandleObject.switchOnService(currentElement);
      }

      servicesHandleObject.updateCntCheckedServices();
    });
  },

  // выбрать услугу
  switchOnService(checkBoxElement) {
    const curIdName = checkBoxElement[0].id;
    const curNumElement = curIdName.slice(-1);
    servicesHandleObject.cntCheckedServices += 1;
    checkBoxElement
      .parent()
      .parent('.service__card-form')
      .next('.service__white-background')
      .addClass('service__white-background__visibility_hidden');
    checkBoxElement
      .next()
      .children('.service__form-text-checkbox')
      .text('выбрано');
    const serviceText = checkBoxElement
      .closest('.service__cards-wrap-item')
      .find('.service__form-card-label')
      .text();
    $('.service__span-cnt-sevices').text(
      servicesHandleObject.cntCheckedServices
    );
    $('.service__choose-list').append(
      `<div class="service__choose-item-wrap" id="service_0${curNumElement}">
          <p class="service__choose-item-text">${serviceText}</p>
          <div class="service__choose-item-number-wrap">
              <p class="service__choose-item-number">0${servicesHandleObject.cntCheckedServices}</p>
          </div>
      </div>`
    );
    checkBoxElement.attr('checked', 'checked');
  },

  // отменить выбор услуги
  switchOffService(checkBoxElement) {
    const curIdName = checkBoxElement[0].id;
    const curNumElement = curIdName.slice(-1);

    servicesHandleObject.cntCheckedServices -= 1;
    checkBoxElement
      .next()
      .children('.service__form-text-checkbox')
      .text('выбрать');
    checkBoxElement
      .parent()
      .parent('.service__card-form')
      .next('.service__white-background')
      .removeClass('service__white-background__visibility_hidden');
    $(`#service_0${curNumElement}`).remove();
    $('.service__span-cnt-sevices').text(
      servicesHandleObject.cntCheckedServices
    );
    checkBoxElement.removeAttr('checked');
  },

  updateCntCheckedServices() {
    $('.service__choose-list .service__choose-item-number').each(function(
      indx,
      element
    ) {
      $(element).text(`0${indx + 1}`);
    });
  },
};

const initServicesLayerHandle = servicesHandleObject.addClickHandle;
export {initServicesLayerHandle};
