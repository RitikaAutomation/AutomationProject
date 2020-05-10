var PrderPage = function () { }
PrderPage.prototype = Object.create({}, {
  Delivery: { get: function () { return element(by.id('button_method_delivery')) } },
  //send keys 
  Address: { get: function () { return element(by.id('form-location-search')) } },
  select: { get: function () { return element(by.id('button_select_method')) } },
  //send keys 
  Companyname: { get: function () { return element(by.id('text_delivery_company')) } },
  //send keys 
  Building: { get: function () { return element(by.id('text_delivery_suite')) } },

  select: { get: function () { return element(by.id('button_select_method')) } },


})
module.exports = PrderPage