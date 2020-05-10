exports.config = {
  seleniumAddress: 'http://localhost:4723/wd/hub',

  //specs: ['spec3.js', 'spec4.js', 'spec5.js'],
  //specs: ['specsamp.js'],

  //specs: ['burgerspec.js'],
  //specs: ['specbur.js'],
  //specs: ['specpayltrl.js'],

  //specs: ['orderspec.js'],

  specs: ['trialburspec.js'],
  //
  //specs: ['specgit.js'],






  // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
  capabilities: {
    browserName: 'chrome',
    platformName: 'Android',
    platformVersion: '6.0.1',

    prefs: {
      'profile.default_content_setting_values.geolocation': 2
    },

    //deviceName: 'ZY224L9R44',
    deviceName: 'SAMSUNG-SM-G928A',
  },
  onPrepare: function () {
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }))
  },


  baseUrl: 'http://10.0.2.2:8000',

};