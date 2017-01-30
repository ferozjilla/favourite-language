import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [UserService]
})
export class AppComponent  { 
  favouriteLang: string;

  constructor(private userService: UserService) {}

  displayFavouriteLanguage(username: string) {
    this.userService.getFavouriteLanguage(username)
    .then(language => this.favouriteLang = language)
    .catch(error => {
      console.log(error);
      this.favouriteLang = "Error: This user does not exist." ;
    });
  }
}
