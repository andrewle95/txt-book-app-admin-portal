import { TXTLibraryPortalPage } from './app.po';

describe('txtlibrary-portal App', function() {
  let page: TXTLibraryPortalPage;

  beforeEach(() => {
    page = new TXTLibraryPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
