var LoginPage = function () { }
LoginPage.prototype = Object.create({}, {
  signin: { get: function () { return element(by.id('button_login')) } },
  Emailmobile: { get: function () { return element(by.id('text_account_login_phone')) } },
  PWD: { get: function () { return element(by.id('text_account_login_password')) } },
  loginphone: { get: function () { return element(by.id('button_login_phone')) } },
  Contnue: { get: function () { return element(by.id('button_close_profile')) } },
  //---------------------------------------//
  // odrer page 

  // Delivery: { get: function () { return element(by.id('button_method_delivery')) } },
  // //send keys 
  // Address: { get: function () { return element(by.id('form-location-search')) } },

  // Alert: { get: function () { return element(by.id('button_location_1')) } },

  // select: { get: function () { return element(by.id('button_select_method')) } },
  // //send keys 
  // Companyname: { get: function () { return element(by.id('text_delivery_company')) } },
  // //send keys 
  // Building: { get: function () { return element(by.id('text_delivery_suite')) } },

  // select: { get: function () { return element(by.id('button_select_method')) } },
  // ---------------------------------------//
  // Picup Page .

  picup: { get: function () { return element(by.css('#button_method_pickup')) } },

  picupselect: { get: function () { return element(by.id('button_select_method')) } },

  picupselect1: { get: function () { return element(by.id('button_location_1')) } },

  buttonyes: { get: function () { return element(by.id('button_group_yes')) } },

  // ordershare: {
  //   get: function () {
  //     return element(by.id('button_date_2'))
  //   }
  // }

  confirmyes: { get: function () { return element(by.id('button_confirm')) } },

  // ordershare: {
  //   get: function () {
  //     return element(by.xpath('//android.view.View[@text= 4 and index=2]'))
  //   }
  // },
  //android:id/windowContentFrame

  // ordershare: {
  //   get: function () {
  //     return element(by.className('android.widget.FrameLayout'))
  //   }
  // },









})
module.exports = LoginPage