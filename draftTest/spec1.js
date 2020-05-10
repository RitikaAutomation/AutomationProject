describe("Open and Validate", function () {
  it("Validate", function () {
    browser.waitForAngularEnabled(false);
    browser.get('https://glitchitsystem.com/superhero/')

    browser.driver.sleep(5000)
    element(by.id('loginEmail')).sendKeys('testing')
    //.switchTo().alert().accept()
    element(by.id('loginPassword')).sendKeys('testing123')
    //browser.driver.sleep(10000)
    //browser.switchTo().alert().accept()
    //element(by.id('btn-submit-tab')).click()
    //browser.driver.sleep(30000)
    //element(by.model('second')).sendKeys(2000);
    //element(by.xpath("//android.view.View/android.widget.Button[3]")).click()
    //browser.driver.sleep(30000)
    //android.widget.Button[@text='DTH']


  })
})