const defaultConfiguration: GreetingConfiguration = {
  messages: {
    morning: 'Good morning',
    afternoon: 'Good afternoon',
    evening: 'Good evening'
  }
};

let activeConfiguration: GreetingConfiguration = { ...defaultConfiguration };

export function greet(currentDate?: Date): string {
  const internalDate = currentDate ?? new Date();
  const currentHour = internalDate.getHours();
  if (currentHour >= 0 && currentHour <= 11) {
    return activeConfiguration.messages.morning;
  }
  if (currentHour >= 12 && currentHour <= 16) {
    return activeConfiguration.messages.afternoon;
  }
  return activeConfiguration.messages.evening;
}

export interface GreetingConfiguration {
  messages: {
    morning: string;
    afternoon: string;
    evening: string;
  },
}

export function configure(configuration: GreetingConfiguration) {
  activeConfiguration = { ...defaultConfiguration, ...configuration };
}
