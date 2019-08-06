import './scss/style.scss';
import $ from 'jquery';
import './script.js';

import htmlHead from './pug/head.pug';
import htmlBody from './pug/body.pug';

const head = $('head');
const body = $('body');

head.children(':not(style)').remove();
head.prepend(htmlHead);

body.children(':not(:last)').remove();
body.prepend(htmlBody);

if (module.hot) {
  module.hot.accept();
}
