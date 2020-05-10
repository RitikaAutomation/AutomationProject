import { DEFAULT_TIMEOUT } from '../constant';
class HomepPage {

  static login() {
    $('~loginbutton').click();
  }

  static singup(username) {
    $('~SingupButton').setValue(username)
  }

  static waitforload() {
    $('~welcomepage').waitForDisplayed(5000);
  }
//   @param { boolean } isShown
// waitForIsShown(isShown = true) {
//   return $(this.selector).waitForDisplayed(DEFAULT_TIMEOUT, !isShown);
// }


export default new HomepPage();

