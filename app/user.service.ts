import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable()
export class UserService {
  constructor(private apiService: ApiService) {}

  getFavouriteLanguage(user: string): Promise<string> { 
    console.log("Getting the user's favourite language");
    return new Promise((resolve, reject) => {
      this.apiService.get(`users/${user}/repos`).then(repos => {
        console.log(repos);
        resolve(this.findFavLang(repos));
      })
      .catch(error => {
        reject(error); 
      });                  
    })
  }

  findFavLang(repos): string {
    console.log('Find Fav Lang called');
    let languages: string[] = repos.map(repo => repo.language);
    let favLang: string = this.mode(languages);
    if (!favLang) {
      return null;
    }
    return favLang;
  }

  // Returns the mode - highest occuring element, of array
  mode(items: string[]): string {
    console.log('Mode called');
    if(items.length == 0) {
      return null;
    }
    let modeMap = []; 
    let maxEl: string = items[0];
    let maxCount: number = 1;
    for(let i = 0; i < items.length; i++)
    {
      let el = items[i];
      if(modeMap[el] == null) {
        modeMap[el] = 1;
      } else {
        modeMap[el]++;  
      }
      if(modeMap[el] > maxCount) {
          maxEl = el;
          maxCount = modeMap[el];
      }
    }
    console.log('Mode returning');
    return maxEl;
  }
}
