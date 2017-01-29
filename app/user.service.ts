import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(http: Http) {}

  getFavouriteLanguage(user: string): Promise<string> { 
    /*
    return new Promise((resolve, reject) => {
      this.apiService.get(`users/${user}/repos`).then(repos => {
        resolve(this.getFavLang(repos));
      });
    });*/
    return Promise.resolve('Test language')
  }

  /*
  getFavLang(repos) {
    return repos[0]; 
  }*/
}
