const $ = require('jquery');

// IMG drag none
$('img, a').on('dragstart', function() {
  return false;
});
