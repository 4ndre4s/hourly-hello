import { Language } from '../shared.types';
import i18next from 'i18next';

i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                greetings: {
                    goodMorning: 'Good morning',
                    hello: 'Hello',
                    goodEvening: 'Good evening'
                }
            }
        },
        de: {
            translation: {
                greetings: {
                    goodMorning: 'Guten Morgen',
                    hello: 'Hallo',
                    goodEvening: 'Guten Abend'
                }
            }
        }
    }
});

export function setLanguage(language: Language): void {
    i18next.changeLanguage(language);
}

export const t = i18next.t;
