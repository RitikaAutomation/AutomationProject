
var objcall = require('./objapaypal.js')
var fs = require('fs')

function writeScreenshot(data, filename) {
  var stream = fs.createWriteStream(filename);
  stream.write(Buffer.from(data, 'base64'));
  stream.end();
}
describe('till enter data', function () {
  it('validate details', function () {
    objcall.iamNotAngular();
    objcall.URL();
    browser.takeScreenshot().then(function (png) {
      writeScreenshot(png, 'firstpage.png');
      objcall.email1('WAGENT');
      objcall.password('Test1234')
      //browser.driver.sleep(10000)
      objcall.login();
      browser.driver.sleep(10000)
      objcall.policy();

    });

    // objcall.password('Test1234')
    // browser.driver.sleep(10000)
    //objcall.policy();
    //objcall.submit1()

  })
})


