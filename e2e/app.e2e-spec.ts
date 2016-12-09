import { PasswordBoxPage } from './app.po';

describe('password-box App', function() {
  let page: PasswordBoxPage;

  beforeEach(() => {
    page = new PasswordBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
