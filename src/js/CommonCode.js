// стили
import '../scss/common/style.scss';

// файлы
import '../assets/images/favicons/android-chrome-192x192.png';
import '../assets/images/favicons/android-chrome-512x512.png';
import '../assets/images/common/img__map-pin.svg';

const $ = require('jquery');

export default function() {
  // IMG drag none
  $('img, a').on('dragstart', function() {
    return false;
  });
}
