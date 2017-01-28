import { AppComponent } from './app.component';
import { UserService } from './user.service';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { async } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let span: HTMLElement;
  let mockFavLang: string = "Test Language";
  let dummyUser: string = "ferozjilla";
  let spy: any;
  let userService: UserService;

  //async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ], // declare the test component
      providers:    [ UserService ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;

      // User service injected into the test component.
      userService = fixture.debugElement.injector.get(UserService);

      // Setup spy on the 'getFavouriteLanguage' method.
      spy = spyOn(userService, 'getFavouriteLanguage')
      .and.returnValue(Promise.resolve(mockFavLang))

      de = fixture.debugElement.query(By.css('span'));
      span = de.nativeElement;
    });  // compile template and css
  }));

  it("should show title", () => {
    const title:HTMLElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.textContent).toBe('Favourite language');
  });

  it("should not display language initially", () => {
    expect(span.textContent).toBe('', 'initially empty');
    expect(spy.calls.any()).toBe(false, 'getFavouriteLanguage not called')
  });

  it("should display language on click", () => {
    const btn  = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(span.textContent).toBe('', 'before click');

    btn.click(dummyUser);
    // getFavouriteLanguage called
    expect(spy.calls.any()).toBe(true, 'getFavouriteLanguage called')

    fixture.whenStable().then(() => {
      expect(span.textContent).toBe("Test language", 'after return');
    });
  });

  //TODO: should display error on invalid username 
});
