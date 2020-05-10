var objcall = require('../page/objfeature')
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
    //objcall.sampleForms();
    browser.takeScreenshot().then(function (png) {
      writeScreenshot(png, 'firstpage.png');
    });


  })
})