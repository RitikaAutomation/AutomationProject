var LoginPage = require('./page/burgerpage.js')
var Expected = require('./page/expected.js')

describe('burgerpager Page Tests', function () {
  //var votePage
  var loginPage
  //var headerPage
  beforeEach(function () {
    expected = new Expected()
    loginPage = new LoginPage()
    // Since this is not the Angular side 
    browser.ignoreSynchronization = true

    // open URL 
    browser.get('https://burger.pretamenu.com/')

  })
  afterEach(function () {

  })

  it('should expect true ', function () {
    expect(expected.signin.isDisplayed()).toBe(true)
    browser.sleep(5000)
    // expect(expected.Emailmobile.isDisplayed()).toBe(true)
    // browser.sleep(5000)
    expect(expected.loginphone.isDisplayed()).toBe(true)
    browser.sleep(5000)


  })
})
