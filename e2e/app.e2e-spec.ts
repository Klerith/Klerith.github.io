import { Demo1Page } from './app.po';

describe('demo1 App', function() {
  let page: Demo1Page;

  beforeEach(() => {
    page = new Demo1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
