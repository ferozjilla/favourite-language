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

  it('should not display a favourite language initially', () => {
    expect(element(by.css('span')).getText()).toEqual('');
  });

  it('favourite language of ferozjilla should be JavaScript', () => {
    element(by.css('input')).sendKeys("ferozjilla");
    element(by.css('button')).click();
    expect(element(by.css('span')).getText()).toEqual('JavaScript');
  });

  it('favourite language of ycmjason should be JavaScript', () => {
    element(by.css('input')).sendKeys("ycmjason");
    element(by.css('button')).click();
    expect(element(by.css('span')).getText()).toEqual('JavaScript');
  });

  it('favourite language of RaduSzasz should be Python', () => {
    element(by.css('input')).sendKeys("RaduSzasz");
    element(by.css('button')).click();
    expect(element(by.css('span')).getText()).toEqual('Python');
  });
  
  it('should display error when user not found', () => {
    element(by.css('input')).sendKeys("fpjilla");
    element(by.css('button')).click();
    expect(element(by.css('span')).getText()).toEqual('Error: This user does not exist.');
  });
});
