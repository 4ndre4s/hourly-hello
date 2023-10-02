export function greetings(currentDate?: Date) {
    const internalDate = currentDate ?? new Date()
    const currentHour = internalDate.getHours()
    if (currentHour >= 0 && currentHour <= 11) {
        return 'Good morning'
    }
    if (currentHour >= 12 && currentHour <= 16) {
        return 'Good afternoon'
    }
    return 'Good evening'
}
