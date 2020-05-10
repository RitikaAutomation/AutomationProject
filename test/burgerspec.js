var until = protractor.ExpectedConditions;
var signin = element(by.id('button_login'));
var Emailmobile = element(by.id('text_account_login_phone'));
// var Login = element(by.id('ul-btn'))
var PWD = element(by.id('text_account_login_password'))
var loginphone = element(by.id('button_login_phone'));
var Contnue = element(by.id('button_close_profile'))
// var overlay = element(by.id('overlayClose'))
// var Menu = element(by.id('toggleNavigationButton'))
// var Activity = element(by.id('header-activity'))
// var sendAndRequest = element(by.id('header-transfer'))
// var PaymentMethod = element(by.id('header-wallet'))
// var Offers = element(by.id('header-offers'))
// var Help = element(by.id('header-contextualHelp'))

describe('features varification', function () {
  it('functionalities', function () {
    browser.waitForAngularEnabled(false);
    browser.get('https://burger.pretamenu.com/')
    browser.wait(until.presenceOf(signin), 5000, 'Login is not found in 5 sec....!');
    signin.click()
    // browser.wait(until.presenceOf(Login), 5000, 'Login is not found in 5 sec....!');
    // Login.click()
    // browser.wait(until.presenceOf(Email), 5000, 'Email is not found in 5 sec....!');
    Emailmobile.sendKeys('2248480967')
    element(by.id('text_account_login_phone')).click()
    browser.wait(until.presenceOf(PWD), 5000, 'Password is not found in 5 sec....!');
    PWD.sendKeys('India123#')

    browser.wait(until.presenceOf(loginphone), 5000, 'Login is not found in 5 sec....!');
    loginphone.click()
    browser.wait(until.presenceOf(Contnue), 5000, 'Contnue is not found in 5 sec....!');
    Contnue.click()
    // browser.wait(until.presenceOf(overlay), 5000, 'LoginButton is not found in 5 sec....!');
    // overlay.click()
    // browser.wait(until.presenceOf(Menu), 5000, 'Menu is not found in 8 sec....!');
    // Menu.click()
    // browser.wait(until.presenceOf(Activity), 5000, 'Activity is not found in 5 sec....!');
    // Activity.click()
    // browser.wait(until.presenceOf(Menu), 5000, 'Menu is not found in 5 sec....!');
    // Menu.click()
    // browser.wait(until.presenceOf(sendAndRequest), 5000, 'sendAndRequest is not found in 5 sec....!');
    // sendAndRequest.click()
    // browser.wait(until.presenceOf(Menu), 5000, 'Menu is not found in 5 sec....!');
    // Menu.click()
    // browser.wait(until.presenceOf(PaymentMethod), 5000, 'PaymentMethod is not found in 5 sec....!');
    // PaymentMethod.click()
    // browser.wait(until.presenceOf(Menu), 5000, 'Menu is not found in 5 sec....!');
    // Menu.click()
    // browser.wait(until.presenceOf(Offers), 5000, 'Offers is not found in 5 sec....!');
    // Offers.click()
    // browser.wait(until.presenceOf(Menu), 5000, 'Menu is not found in 5 sec....!');
    // Menu.click()
    // browser.wait(until.presenceOf(Help), 5000, 'Help is not found in 5 sec....!');
    // Help.click()

  })
})