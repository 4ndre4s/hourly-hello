import i18next from 'i18next';
import { setLanguage } from './i18n.service';
import { Language } from '../shared.types';

describe('I18nService', () => {
    describe('setLanguage', () => {
        it('should change the language', () => {
            const language = Language.DE;
            expect(i18next.language).not.toBe(language);
            setLanguage(language);
            expect(i18next.language).toBe(language);
        });
    });
});
