describe("Open and Validate", function () {
  it("Validate", function () {
    browser.waitForAngularEnabled(false);
    browser.get('http://airtel.in')
    //var dog = "android.widget.Button"
    //element(by.id('txt-tab-input')).click()
    //browser.switchTo().alert().accept()
    // element(by.xpath('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.webkit.WebView/android.view.View/android.view.View[3]/android.view.View/android.view.View[1]/android.view.View/android.widget.Button[3]'
    // )).click()
    // browser.driver.sleep(30000)
    browser.driver.sleep(10000)
    browser.switchTo().alert().accept()
    element(by.css('android.widget.Button')).click()
    //expect(dog.getId()).not.toBe(undefined);


  })
})