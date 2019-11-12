const axios = require('axios');
const $ = require('jquery');
const ServerResponseError = require('../../../errors/ServerResponseError.js');

module.exports = {
  // проверить поля формы на пустоту
  checkRequiredFields(jqueryFormElement) {
    const allRequiredFields = jqueryFormElement.find('input[required]');
    allRequiredFields.each(function(indx, element) {
      if ($(element).val() === '') {
        alert('Заполните поля формы!');
        return false;
      }
    });
    return true;
  },

  // переадресовать на другую страницу
  redirect(pagePath) {
    $(window.location).attr('href', pagePath);
  },

  // отправить заявку на сервер
  async sendFormRequest(url, data) {
    try {
      const response = await axios.post(url, data);
      if (response.data !== 'Done') {
        throw new ServerResponseError(
          `Ошибка при отправке заявки на сервер! Details: ${response.data}`
        );
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
