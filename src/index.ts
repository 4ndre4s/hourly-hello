import * as greetingService from './lib/greeting.service';
import * as i18nService from './lib/i18n.service';

module.exports = {
    greet: greetingService.greet,
    setLanguage: i18nService.setLanguage
};
