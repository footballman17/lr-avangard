import '../../src/js/common.js';
import '../../src/js/thankyou';

import pugTemplate from '../../src/pug/thankyou/index.pug';
import updateHeadBodyHtmlCode from '../lib/updateHeadBodyHtmlCode.js';

updateHeadBodyHtmlCode(pugTemplate);
if (module && module.hot) module.hot.accept();
