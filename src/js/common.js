// стили
import '../scss/common/style.scss';

// файлы
import '../assets/images/favicons/android-chrome-192x192.png';
import '../assets/images/favicons/android-chrome-512x512.png';
import '../assets/images/common/img__map-pin.svg';
import './order.php';
import './sendmailsmtpclass.php';
import '../docs/tpl-email/tpl-email_v1.html';

const $ = require('jquery');

// IMG drag none
$('img, a').on('dragstart', function() {
  return false;
});

console.log('hello common');
