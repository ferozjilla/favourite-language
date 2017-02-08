import { browser, element, by } from 'protractor';

describe('E2E Tests', function () {

  let startupMsg = 'Your Favourite Language';
  let noRegisteredLangMsg = 'The user has no repository with a registered language.';
  let invalidUsernameMsg = 'Invalid GitHub username';
  let noReposMsg = 'The user has no repositories.';

  beforeEach(function () {
    browser.get('');
  });

  it('should be running this test-suite', () => {
    expect(true).toBe(true); 
  });

  it('should display: ' + startupMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(startupMsg);
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
    expect(element(by.css('span')).getText()).toBe('Python,C++,CSS');
  });
  
  it('NvPhysX should have no registered language', () => {
    element(by.css('input')).sendKeys("NvPhysX");
    element(by.css('button')).click();
    expect(element(by.css('span')).getText()).toEqual(noRegisteredLangMsg);
  });

  it('nonexistnt should be an invalid username', () => {
    element(by.css('input')).sendKeys("nonexistnt");
    element(by.css('button')).click();
    expect(element(by.css('span')).getText()).toEqual(invalidUsernameMsg);
  });
  
  it('nonexi should have no repositories', () => {
    element(by.css('input')).sendKeys("nonexi");
    element(by.css('button')).click();
    expect(element(by.css('span')).getText()).toEqual(noReposMsg);
  });
});
