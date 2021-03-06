import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable()
export class UserService {
  userLangCache = [];

  constructor(private apiService: ApiService) {}

  getFavouriteLanguage(user: string): Promise<string> { 
    console.log("Getting the user's favourite language");
    return new Promise((resolve, reject) => {
      // Check cache
      if (this.userLangCache[user] != null) {
        console.log('Returning cached result');
        resolve(this.userLangCache[user]); 
        return;
      }

      this.apiService.get(`users/${user}/repos`).then(repos => {
        console.log('CALLING GET');
        console.log(repos);
        let favLang = this.findFavLang(repos);
        // Add to cache.
        this.userLangCache[user] = favLang;
        resolve(favLang);
      })
      .catch(error => {
        switch(error.status) {
          case 404: 
            let invalidUnMsg = 'Invalid GitHub username';
          // Add to cache.
          this.userLangCache[user] = invalidUnMsg;
          reject(invalidUnMsg);
          case 500: 
            reject('GitHub down');
          default: 
            reject('Cannot recover favourite language.');
        }
        console.error(error);
      });                  
    })
  }

  findFavLang(repos): string {
    console.log('Find Fav Lang called');
    let languages: string[] = repos.map(repo => repo.language);
    let favLangs: string[] = this.mode(languages);
    if (!favLangs) {
      return "The user has no repositories.";
    }
    // No registered language
    if (favLangs.length == 0) {
      return "The user has no repository with a registered language.";
    }
    // The favourite language(s)
    return favLangs.toString();
  }

  /**
   * Returns the mode - highest occuring element, of array.
   * Ignores null entries.
   * Returns null if argument list is empty.
   */ 
  mode(items: string[]): string[] {
    console.log('Mode called');
    if (items.length == 0) {
      return null;
    }
    let modeMap = []; 
    let maxEls: string[] = [];
    let maxCount: number = 0;
    for(let i = 0; i < items.length; i++)
    {
      let el = items[i];
      // If element is null, ignore it.
      if (el == null) {
        continue;
      }
      // If element not seen before, mark it's seen count to 1.
      // Otherwise increment count.
      if(modeMap[el] == null) {
        modeMap[el] = 1;
      } else {
        modeMap[el]++;  
      }

      // If an element reaches max count, add it to maxEls.
      if(modeMap[el] == maxCount) {
        maxEls.push(el);
      }
      // If an element exceeds max count, set maxEls to list 
      // ...with just the element.
      // Update max count
      if (modeMap[el] > maxCount) {
        maxEls = [el];
        maxCount = modeMap[el];
      }
    }
    console.log('Mode returning');
    return maxEls;
  }
}
