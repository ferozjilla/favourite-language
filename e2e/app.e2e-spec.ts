import { browser, element, by } from 'protractor';

describe('E2E Tests', function () {

  let expectedMsg = 'Hello Feroz';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
