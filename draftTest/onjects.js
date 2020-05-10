var ob = function () {
  var EmailId = element(by.id('loginEmail'))
  var Pwd = element(by.id('loginPassword'))

  this.URL = function () {
    browser.get('https://glitchitsystem.com/superhero/')
  }

  this.email = function (value) {
    EmailId.sendKeys(value)
  }

  this.iamNotAngular = function () {
    browser.waitForAngularEnabled(false);
  }

  this.password = function (value1) {
    Pwd.sendKeys(value1)
  }
}
module.exports = new ob();