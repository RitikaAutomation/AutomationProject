import HomepPage from '../pageobjects/homepage';

describe('This is a Login Part Verification', function () {
  const username = 'test@gmail.com'
  it("Hit Me on a Login", function () {
    HomepPage.login();
    HomepPage.singup(username)
  })
  it("Take me to waitMode", function () {
    HomepPage.waitforload();
  })
})