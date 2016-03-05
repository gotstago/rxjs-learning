export class ReduxTwoPage {
  navigateTo() {
    return browser.get('/');
  }
  
  getParagraphText() {
    return element(by.css('ReduxTwo-app p')).getText();
  }
}
