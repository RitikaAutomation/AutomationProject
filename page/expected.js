var Expected = function () { }
Expected.prototype = Object.create({}, {
  signin: { get: function () { return element(by.id('button_login')) } },
  Emailmobile: { get: function () { return element(by.id('text_account_login_phone')) } },
  PWD: { get: function () { return element(by.id('text_account_login_password')) } },
  loginphone: { get: function () { return element(by.id('button_login_phone')) } },
  Contnue: { get: function () { return element(by.id('button_close_profile')) } },

})
module.exports = Expected