import ServerResponseError from '../../../errors/ServerResponseError.js';

const $ = require('jquery');
const axios = require('axios');

// проверить поля формы на пустоту
export const checkRequiredFields = jqueryFormElement => {
  const allRequiredFields = jqueryFormElement.find('input[required]');
  allRequiredFields.each(function(indx, element) {
    if ($(element).val() === '') {
      alert('Заполните поля формы!');
      return false;
    }
  });
  return true;
};

// переадресовать на другую страницу
export const redirect = $pagePath => {
  $(window.location).attr('href', $pagePath);
};

// отправить заявку на сервер
export const sendFormRequest = async (url, data) => {
  try {
    const response = await axios.post(url, data);
  } catch (error) {
    throw new ServerResponseError(
      `Ошибка при отправке заявки на сервер!`,
      error
    );
  }
};
