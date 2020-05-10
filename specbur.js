
var LoginPage = require('./page/burgerpage.js')
describe('burgerpager Page Tests', function () {
  //var votePage
  var loginPage
  //var headerPage
  beforeEach(function () {
    //votePage = new VotePage(
    loginPage = new LoginPage()
    // Since this is not the Angular side 
    browser.ignoreSynchronization = true
    // browser.switchTo().alert().accept = true
    // open URL 
    browser.get('https://burger.pretamenu.com/')

  })
  afterEach(function () {

  })
  it('should display burgerpage elements ', function () {
    // loginPage.signin.click()
    // browser.sleep(5000)
    // loginPage.Emailmobile.sendKeys('2248480967')
    // browser.sleep(5000)
    // loginPage.PWD.sendKeys('India123#')
    // browser.sleep(5000)
    // // loginPage.signin.click()
    // // browser.sleep(5000)
    // loginPage.loginphone.click()
    // browser.sleep(5000)
    // loginPage.Contnue.click()
    // browser.sleep(2000)

    loginPage.picup.click()
    browser.sleep(2000)

    loginPage.picupselect.click()
    browser.sleep(2000)

    loginPage.picupselect1.click()
    browser.sleep(2000)

    loginPage.buttonyes.click()
    browser.sleep(2000)

    // loginPage.confirmyes.click()
    // browser.sleep(2000)

    //--------------------------------------// Picup Page .

    loginPage.picup.click()
    browser.sleep(2000)

    loginPage.picupselect.click()
    browser.sleep(2000)

    loginPage.picupselect1.click()
    browser.sleep(2000)

    loginPage.buttonyes.click()
    browser.sleep(4000)

    loginPage.confirmyes.click()
    browser.sleep(2000)

    // loginPage.ordershare.click()
    // browser.sleep(2000)

    //--------------------------------------//

    //order page
    // loginPage.Delivery.click()
    // //browser.sleep(2000)
    // loginPage.Address.sendKeys('Riviera Avenue, Vegas, NV, USA')
    // browser.sleep(1000)

    // loginPage.Alert.click()
    // //browser.sleep(3000)

    // loginPage.select.click()
    // browser.sleep(2000)

    // loginPage.Companyname.sendKeys('wdt')
    // browser.sleep(2000)

    // loginPage.Building.sendKeys('200')
    // browser.sleep(5000)

    // loginPage.select.click()
    // browser.sleep(5000)

  })
})
  //--------------------------------------// Picup Page .



