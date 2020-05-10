var ob = function () {
  var Login = element(by.xpath('	//*[@id="form1"]/div[4]/button'))
  var EmailId = element(by.id('username'))
  var Pwd = element(by.id('password'))
  var Policy1 = element(by.id('HomeButton'))
  var until = protractor.ExpectedConditions;
  //var Menu = element(by.id('toggleNavigationButton'))
  // var Activity = element(by.id('header-activity'))
  // var offers = element(by.id('header-offers'))

  this.URL = function () {
    browser.get('https://windhaven.staging.ptsapp.com/')
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
  // this.login = function () {
  //   login.click()
  // }

  this.login = function () {
    Login.click()
  }

  this.policy = function () {
    //browser.wait(until.presenceOf(Policy1), 15000, 'Policy is not found in 15 sec....!');
    Policy1.click()
  }
  // this.login = function () {
  //   offers.click()
}


module.exports = new ob();