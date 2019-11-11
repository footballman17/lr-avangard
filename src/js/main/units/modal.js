const $ = require('jquery');

export default function() {
  $(
    '.action__form-button, .modal__form__close-text-wrap, .modal__form__close-icon, .contacts__form-button'
  ).click(function() {
    $('.modal-wrapper').toggleClass(
      'modal-wrapper__active modal-wrapper__inactive'
    );
  });

  $('.open-modal-ask').click(function() {
    $('.modal__form-service').val($(this).attr('data-service'));
    $('.modal_active').toggleClass('modal_active modal_inactive');
    $('.modal-ask').toggleClass('modal_active modal_inactive');
  });
  $('.open-modal-callback').click(function() {
    $('.modal__form-service').val($(this).attr('data-service'));
    $('.modal_active').toggleClass('modal_active modal_inactive');
    $('.modal-callback').toggleClass('modal_active modal_inactive');
  });
  $('.close').click(function() {
    $('.modal_active').toggleClass('modal_active modal_inactive');
  });
}
