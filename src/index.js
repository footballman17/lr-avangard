import './scss/style.scss';
import $ from 'jquery';

const bodyHtml = require('./index.pug');

$('body').html(bodyHtml);

if (module.hot) {
  module.hot.accept();
}
