import '../../src/js/common.js';
import '../../src/js/main';

import pugTemplate from '../../src/pug/main/index.pug';
import updateHeadBodyHtmlCode from '../lib/updateHeadBodyHtmlCode.js';

updateHeadBodyHtmlCode(pugTemplate);
if (module && module.hot) module.hot.accept();
