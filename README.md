# HourlyHello 🕒

Make your users' experience more engaging and personalized with dynamic greetings based on the time of day! 🌟

## Features

- 🕒 Personalized greetings based on the time.
- 🌆 Dynamic messages that change as the day progresses.
- 🌟 Easy-to-use API for integrating greetings into your applications.

## Installation

You can install HourlyHello via npm:

```bash
npm install time-greetings
```

## Usage
Here's how you can use HourlyHello in your JavaScript project:

```javascript
const { greet } = require('hourly-hello');

const currentDate = new Date();
const greeting = greet(currentDate);
console.log(greeting); // output: Good morning!
```

## Examples
Here are some examples of greetings you might receive:

- Good morning! 🌅
- Hello there! 👋
- Good evening! 🌆

## Issues
If you encounter any issues with the library or have suggestions for improvements, please [open an issue](https://github.com/4ndre4s/hourly-hello/issues) on our Issue Tracker.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/4ndre4s/hourly-hello/blob/master/LICENSE) file for details.
