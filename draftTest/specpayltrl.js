var until = protractor.ExpectedConditions;
var Email = element(by.id('email'));
var Login = element(by.id('ul-btn'))
var PWD = element(by.id('password'))
var LoginButton = element(by.id('btnLogin'))
var overlay = element(by.id('overlayClose'))
var Menu = element(by.id('toggleNavigationButton'))
var Activity = element(by.id('header-activity'))
var sendAndRequest = element(by.id('header-transfer'))
var PaymentMethod = element(by.id('header-wallet'))
var Offers = element(by.id('header-offers'))
var Help = element(by.id('header-contextualHelp'))

describe('features varification', function () {
  it('functionalities', function () {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.paypal.com/')
    browser.wait(until.presenceOf(Login), 5000, 'Login is not found in 5 sec....!');
    Login.click()
    browser.wait(until.presenceOf(Email), 5000, 'Email is not found in 5 sec....!');
    Email.sendKeys('akash.shah.archer5@gmail.com')
    element(by.id('btnNext')).click()
    browser.wait(until.presenceOf(PWD), 5000, 'Password is not found in 5 sec....!');
    PWD.sendKeys('Covit@123')
    browser.wait(until.presenceOf(LoginButton), 5000, 'LoginButton is not found in 5 sec....!');
    LoginButton.click()
    browser.wait(until.presenceOf(overlay), 5000, 'LoginButton is not found in 5 sec....!');
    overlay.click()
    browser.wait(until.presenceOf(Menu), 5000, 'Menu is not found in 8 sec....!');
    Menu.click()
    browser.wait(until.presenceOf(Activity), 5000, 'Activity is not found in 5 sec....!');
    Activity.click()
    browser.wait(until.presenceOf(Menu), 5000, 'Menu is not found in 5 sec....!');
    Menu.click()
    browser.wait(until.presenceOf(sendAndRequest), 5000, 'sendAndRequest is not found in 5 sec....!');
    sendAndRequest.click()
    browser.wait(until.presenceOf(Menu), 5000, 'Menu is not found in 5 sec....!');
    Menu.click()
    browser.wait(until.presenceOf(PaymentMethod), 5000, 'PaymentMethod is not found in 5 sec....!');
    PaymentMethod.click()
    browser.wait(until.presenceOf(Menu), 5000, 'Menu is not found in 5 sec....!');
    Menu.click()
    browser.wait(until.presenceOf(Offers), 5000, 'Offers is not found in 5 sec....!');
    Offers.click()
    browser.wait(until.presenceOf(Menu), 5000, 'Menu is not found in 5 sec....!');
    Menu.click()
    browser.wait(until.presenceOf(Help), 5000, 'Help is not found in 5 sec....!');
    Help.click()

  })
})