var objcall = require('./onjects')
var fs = require('fs')

function writeScreenshot(data, filename) {
  var stream = fs.createWriteStream(filename);
  stream.write(new Buffer(data, 'base64'));
  stream.end();
}

describe('till enter data', function () {
  it('validate details', function () {
    objcall.iamNotAngular();
    objcall.URL();
    objcall.email('testingemail');
    browser.takeScreenshot().then(function (png) {
      writeScreenshot(png, 'firstpage.png');
    });

    objcall.password('test@123')

  })
})