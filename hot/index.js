import $ from 'jquery';
import pugTemplate from '../src/pug/main/index.pug';

import '../src/js/main';

const locals = {};
const newHtml = pugTemplate(locals);

const htmlObject = {
  html: newHtml,
  getHtmlFromTag(tagName) {
    const regexp = new RegExp(`\<${tagName}\>[^]*<\/${tagName}\>`);
    const result = this.html.match(regexp);
    return result[0];
  },
};

const newHeadHtml = htmlObject.getHtmlFromTag('head');
const newBodyHtml = htmlObject.getHtmlFromTag('body');

$('head *:not(style)').remove();

$('head').prepend(newHeadHtml);
$('body').html(newBodyHtml);

if (module && module.hot) module.hot.accept();
