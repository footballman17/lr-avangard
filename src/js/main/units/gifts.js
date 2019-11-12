const $ = require('jquery');

export default function() {
  let curModalInfo = $(
    '.card-gift__border_no-opacity .card-gift__desc-text'
  ).text();
  $('.modal-form-gifts').attr('value', curModalInfo);
  $('.card-gift').click(function() {
    curModalInfo = $('.card-gift__desc-text', this).text();
    $('.modal-form-gifts').attr('value', curModalInfo);
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
}
