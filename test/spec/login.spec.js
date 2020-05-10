describe("Open and Validate", function () {
  it("Validate", function () {
    browser.url("http://airtel.in")
    element(by.id('#txt-tab-input')).sendKeys('9999999999')

  })
})