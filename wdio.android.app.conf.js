const { join } = require("path");
const { config } = require("./wdio.conf.js");

config.specs = ["./test/spec/Ops.js"];
config.capabilities = [
  {
    platformName: "Android",
    maxInstances: 1,
    "appium:deviceName": "0715f7f165152204",
    "appium:platformVersion": "6.0.1",
    "appium:orientation": "PORTRAIT",
    "appium:automationName": "UiAutomator2",
    "appium:appActivity": "com.android.mms.ui.ConversationComposer",
    "appium:appPackage": "com.android.mms",
    "appium:noReset": true,
    "appium:newCommandTimeout": 240
  }
];
exports.config = config;
