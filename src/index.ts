import * as greetingService from './lib/greeting.service';
import * as i18nService from './lib/i18n.service';

export const greet = greetingService.greet;
export const setLanguage = i18nService.setLanguage;
