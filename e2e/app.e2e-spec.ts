import { ExampleProgressiveAppPage } from './app.po';

describe('example-progressive-app App', () => {
  let page: ExampleProgressiveAppPage;

  beforeEach(() => {
    page = new ExampleProgressiveAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
