var LoginPage = require('../page/burgerpage.js')
var PrderPage = require('../page/orderpage.js')

describe('burgerpager Page Tests', function () {
  var prderPage
  var loginPage
  //var headerPage
  beforeEach(function () {
    prderPage = new PrderPage()
    loginPage = new LoginPage()
    // Since this is not the Angular side 
    browser.ignoreSynchronization = true

    // open URL 
    browser.get('https://burger.pretamenu.com/')

  })
  afterEach(function () {

  })
  it('should order page display ', function () {
    prderPage.Delivery.click()
    browser.sleep(5000)
    prderPage.Address.sendKeys('New York-New York Hotel & Casino')
    browser.sleep(2000)

    prderPage.Address.click()

    orderPage.select.click()
    browser.sleep(5000)

    prderPage.Companyname.sendKeys('wdt')
    browser.sleep(5000)

    prderPage.Building.sendKeys('200')
    browser.sleep(5000)

    prderPage.select.click()
    browser.sleep(5000)

    // loginPage.loginphone.click()
    // browser.sleep(5000)
    // loginPage.Contnue.click()
    // browser.sleep(5000)


  })



})

  // it('login with search option should work ', function () {









//})