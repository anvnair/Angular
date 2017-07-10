import { NgIntroPage } from './app.po';

describe('ng-intro App', () => {
  let page: NgIntroPage;

  beforeEach(() => {
    page = new NgIntroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
