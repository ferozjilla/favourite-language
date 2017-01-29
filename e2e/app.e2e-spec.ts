import { browser, element, by } from 'protractor';

describe('E2E Tests', function () {

  let expectedMsg = 'Favourite language';

  beforeEach(function () {
    browser.get('');
  });

  it('should be running this test-suite', () => {
    expect(true).toBe(true); 
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
