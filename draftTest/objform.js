var ob = function () {
  var EmailId = element(by.id('user'))
  var Pwd = element(by.id('pass'))
  var submit = element(by.xpath('//*[@id="right_col_top"]/form/div/input'))

  // var Sendto = element(by.xpath('//*[@id="contactForm"]/table/tbody/tr[1]/td/div/input[3]'))
  // var Subject = element(by.css('#subject'))
  // var Emailadrs = element(by.id('email'))
  // var TextBox = element(by.id('q1'))
  // var SampleForm = element(by.xpath('//*[@id="header"]/ul/li[6]/span'))

  //var NewForm = element(by.xpath('//*[@id="user_bar"]/ul/li[2]/a'))

  this.URL = function () {
    browser.get('https://www.mycontactform.com/')
  }
  // this.sf = function () {
  //   sampleforms.click();


  this.email = function (value) {
    EmailId.sendKeys(value)
  }

  this.iamNotAngular = function () {
    browser.waitForAngularEnabled(false);
  }

  this.password = function (value1) {
    Pwd.sendKeys(value1)
  }
  this.submit1 = function () {
    submit.click()
  }
  this.form = function () {
    NewForm.click()
  }
  // this.sendto = function () {
  //   Sendto.click();
  // }
  // this.sample = function () {
  //   SampleForm.click();
  // }
  // this.subject = function () {
  //   Subject.sendKeys()
  // }

  // // this.SampleForm = function (value4) {
  // //   sampleForm.sendKeys(value)

  // // this.SampleForm = function () {
  // //   sampleForm.click()
  // // }
  // this.emailadrs = function () {
  //   Emailadrs.sendKeys()
  // }

  // this.textBox = function (value) {
  //   TextBox.sendKeys(value)
  // }


  // this.SampleForms = function (value2) {
  //   SampleForms.click();

}
module.exports = new ob();