const { config } = require('./wdio.conf');

config.specs = [
  './test/spec/login.spec.js',
];

config.capabilities = [
  {
    platformName: 'Android',
    browserName: 'chrome',
    maxInstances: 1,
    //noRESET: 'false',
    'appium:deviceName': 'SAMSUNG-SM-G928A',
    'appium:platformVersion': '6.0.1',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'UiAutomator2',
    'appium:newCommandTimeout': 24000,
    //'goog:chromeOptions': {
    //  w3c: true,
    // Add this option to prevent the annoying "Welcome"-message
    //  args: ['--no-first-run'],
    //},
  },
];
exports.config = config;