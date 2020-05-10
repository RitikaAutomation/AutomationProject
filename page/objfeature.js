var ob = function () {
  var sampleForms = (By.xpath("//android.widget.FrameLayout[@text='Sample Forms']"))
  //var Pwd = element(by.id('pass'))



  this.URL = function () {
    browser.get('https://www.mycontactform.com/')
  }

  this.sampleForms = function () {
    //EmailId.sendKeys(value)
  }

  //   this.iamNotAngular = function () {
  //     browser.waitForAngularEnabled(false);
  //   }

  //   this.password = function (value1) {
  //     Pwd.sendKeys(value1)
  //   }
}
module.exports = new ob();