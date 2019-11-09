import serverResponseError from '../../../errors/ServerResponseError.js';
// import {checkRequiredFields, redirect, sendFormRequest} from './functions.js';
// import {checkRequiredFields, redirect, sendFormRequest} from './functions.js';

const $ = require('jquery');
const pointLibs = require('./functions.js');

const urlPath = '/js/order.php';
const thanksPagePath = '/thankyou.html';

const alertErrorMessage =
  'При отправке заявки на сервер произошла ошибка! Пожалуйста, повторите попытку или свяжитесь с нами по телефону.';
const warningVoidMessage = 'Заполните поля формы!';
const alertSuccessMessage =
  'Заявка успешно отправлена! В ближайшее время наш менеджер свяжется с Вами.';

const IS_REDIRECT_TO_THANKS_PAGE = true;

export default function() {
  $('form').submit(function() {
    const jqueryFormElement = $(this);

    // проверить поля формы на пустоту
    if (pointLibs.checkRequiredFields(jqueryFormElement) === false) {
      alert(warningVoidMessage);
      return false;
    }

    // получить данные формы
    const formData = jqueryFormElement.serialize();

    (async () => {
      try {
        // отправить данные формы на сервер
        await pointLibs.sendFormRequest(urlPath, formData);

        if (IS_REDIRECT_TO_THANKS_PAGE) {
          // перейти на страницу благодарности
          pointLibs.redirect(thanksPagePath);
        } else {
          alert(alertSuccessMessage);
        }
      } catch (error) {
        if (error instanceof serverResponseError) {
          const detailErrMessage = `Error! name: '${error.name}', message: '${error.message}`;
          console.error(detailErrMessage);
          alert(alertErrorMessage);
        } else {
          console.error(`Unexpected error! stack: '${error.stack}'`);
        }
      } finally {
        // закрыть модальное окно
        const modalWrapper = $('.modal-wrapper');
        if (modalWrapper.hasClass('modal-wrapper__active')) {
          modalWrapper.toggleClass(
            'modal-wrapper__active modal-wrapper__inactive'
          );
        }
      }
    })();

    return false;
  });
}
