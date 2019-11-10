import $ from 'jquery';
import locals from '../locals.js';

export default function(pugTemplate) {
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
}
