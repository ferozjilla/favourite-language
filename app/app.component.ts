import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  template: `
  <h1>Favourite language</h1>
  <br>
  <input #input placeholder="Enter username : " />
  <button (click)="displayFavouriteLanguage(input.value)"></button>
  <br><br>
  <span>{{favouriteLang}}</span>
  `,
  providers: [UserService]
})
export class AppComponent  { 
  favouriteLang: string;
  constructor(private userService: UserService) {}

  displayFavouriteLanguage(username: string) {
    this.userService.getFavouriteLanguage(username)
    .then(language => this.favouriteLang = language);
  }
}
