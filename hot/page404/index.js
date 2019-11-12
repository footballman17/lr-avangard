import Common from '../Common.js';
import ClientCode from '../../src/js/main/ClientCode.js';

import pugTemplate from '../../src/pug/page404/index.pug';
import updateHeadBodyHtmlCode from '../lib/updateHeadBodyHtmlCode.js';

// следить за pug-исходниками
updateHeadBodyHtmlCode(pugTemplate);

// загрузить клиентский js-код
Common();
ClientCode();

if (module && module.hot) module.hot.accept();
