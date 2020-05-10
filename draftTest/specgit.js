var FirstTextBox = element(by.className('input-small ng-pristine ng-untouched ng-valid'))
var Operator = element(by.model("operator"))
var SecondTextBox = element(by.model('second'))
var Go = element(by.className('btn'))

describe('features varification', function () {
  it('functionalities', function () {
    browser.get('https://juliemr.github.io/protractor-demo/')

    FirstTextBox.sendKeys(101);
    Operator.click();
    Operator.$('[value="DIVISION"]').click();
    SecondTextBox.sendKeys(38);
    Go.click();
    browser.sleep(5000)
    var GetData = element(by.className('ng-binding')).getText()
    console.log("Result is :- ", GetData)
  })
})