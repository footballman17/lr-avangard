import serverResponseError from '../../../errors/ServerResponseError.js';
import {checkRequiredFields, redirect, sendFormRequest} from './index.js';

const urlPath = '/js/order.php';
const thanksPagePath = '/thankyou.html';
const alertErrorMessage =
  'При отправке заявки на сервер произошла ошибка! Пожалуйста, повторите попытку или свяжитесь с нами по телефону.';
const alertSuccessMessage =
  'Заявка успешно отправлена! В ближайшее время наш менеджер свяжется с Вами.';

const IS_REDIRECT_TO_THANKS_PAGE = true;

$('form').submit(function() {
  const jqueryFormElement = $(this);

  // проверить поля формы на пустоту
  if (checkRequiredFields(jqueryFormElement) === false) return false;

  try {
    const formData = $(this);

    // отправить данные формы на сервер
    sendFormRequest(urlPath, formData.serialize());

    if (IS_REDIRECT_TO_THANKS_PAGE) {
      // переадресовать на страницу благодарности
      redirect(thanksPagePath);
    } else {
      alert(alertSuccessMessage);
    }
  } catch (error) {
    if (error instanceof serverResponseError) {
      const detailErrMessage = `Error! name: '${error.name}', message: '${error.message}' Cause: '${error.cause.name}', '${error.cause.message}'`;
      console.log(detailErrMessage);
      alert(alertErrorMessage);
    } else {
      console.log(`Unexpected error! stack: '${error.stack}'`);

      // $('.modal-wrapper').toggleClass(
      //   'modal-wrapper__active modal-wrapper__inactive'
      // );
      alert(alertErrorMessage);
    }
  }
});

// $('form').submit(function() {
//   // Check required fields
//   const allRequiredFields == $(this).find('input[required]');
//   let flagEmpty = false;
//   allRequiredFields.each(function(indx, element) {
//     if ($(element).val() === '') flagEmpty = true;
//   });
//   if (flagEmpty) {
//     alert('Заполните поля формы!');
//     return false;
//   }
// E-mail Ajax Send

// console.log(decodeURI(th.serialize()));
//   $.ajax({
//     type: 'POST',
//     url: '/js/order.php',
//     data: th.serialize(),
//   }).done(function() {
//     // Go to Thanks page
//     $(location).attr('href', '/thankyou.html');
//     // Open Thanks window
//     // alert(
//     //   'Заявка успешно отправлена! В ближайшее время наш менеджер свяжется с Вами.'
//     // );
//     setTimeout(function() {
//       // Done Functions
//       $('.modal-wrapper').toggleClass(
//         'modal-wrapper__active modal-wrapper__inactive'
//       );
//     }, 1000);
//   });
//   return false;
// });
