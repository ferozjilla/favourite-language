import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  getFavouriteLanguage(user: string): Promise<string> { 
    //TODO: Make the GitHub api calls
    return Promise.resolve("Test language"); 
  }
}
