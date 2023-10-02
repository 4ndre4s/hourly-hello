import { t } from './i18n.service';

export function greet(currentDate?: Date): string {
    const internalDate = currentDate ?? new Date();
    const currentHour = internalDate.getHours();
    if (currentHour >= 0 && currentHour <= 11) {
        return t('greetings.goodMorning');
    }
    if (currentHour >= 12 && currentHour <= 16) {
        return t('greetings.hello');
    }
    return t('greetings.goodEvening');
}
