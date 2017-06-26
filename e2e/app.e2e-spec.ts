import { PicViewerNGFirePage } from './app.po';

describe('pic-viewer-ng-fire App', () => {
  let page: PicViewerNGFirePage;

  beforeEach(() => {
    page = new PicViewerNGFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
