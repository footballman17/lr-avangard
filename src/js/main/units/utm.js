const $ = require('jquery');

export default function() {
  const getUTM = name => {
    const target = window.location.search.match(new RegExp(`${name}=([^&]+)`));
    return target ? target[1] : 'Не используется';
  };

  $('.utm_medium').val(getUTM('utm_medium'));
  $('.utm_source').val(getUTM('utm_source'));
  $('.utm_campaign').val(getUTM('utm_campaign'));
  $('.utm_term').val(getUTM('utm_term'));
  $('.utm_content').val(getUTM('utm_content'));
}
