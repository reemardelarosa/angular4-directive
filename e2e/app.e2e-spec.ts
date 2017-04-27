import { DirectivesStartPage } from './app.po';

describe('directives-start App', function() {
  let page: DirectivesStartPage;

  beforeEach(() => {
    page = new DirectivesStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
