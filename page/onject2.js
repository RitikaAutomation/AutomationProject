var ob = function () {
  var EmailId = element(by.id('email'))
  var Pwd = element(by.id('password'))
  var Menu = element(by.id('toggleNavigationButton'))
  var Activity = element(by.id('header-activity'))
  var offers = element(by.id('header-offers'))

  this.URL = function () {
    browser.get('https://www.paypal.com/')
  }
  this.sf = function () {
    Activity.click();
  }

  this.email1 = function (value) {
    EmailId.sendKeys(value)
  }

  this.iamNotAngular = function () {
    browser.waitForAngularEnabled(false);
  }

  this.password = function (value1) {
    Pwd.sendKeys(value1)
  }
  this.login = function () {
    login.click()
  }

  this.login = function () {
    Menu.click()
  }
  this.login = function () {
    offers.click()
  }



}
module.exports = new ob();