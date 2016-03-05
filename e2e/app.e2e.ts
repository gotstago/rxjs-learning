import { ReduxTwoPage } from './app.po';

describe('redux-two App', function() {
  let page: ReduxTwoPage;

  beforeEach(() => {
    page = new ReduxTwoPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('redux-two Works!');
  });
});
