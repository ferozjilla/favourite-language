import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  private api_base = `http://api.github.com/`;

  constructor(private http: Http) {
    //const port = window.location.port? `:${window.location.port}/`: `/`;
    //this.api_base = this.api_base + port;
    console.log("Frontend directing queries to " + this.api_base);
  }

  private parseQuery(query) {
    if(!query || Object.keys(query).length <= 0) return '';

    let qs = [];
    for(let key in query) {
      qs.push(`${key}=${query[key]}`);
    }
    return '?' + qs.join('&');
  }

  public get(endpoint, query?) {
    return new Promise((resolve, reject) => {
      this.http.get(this.api_base + endpoint + this.parseQuery(query))
      .map(res => res.json())
      .subscribe(res => resolve(res));
    });
  }

  public post(endpoint, query?, body?) {
    return new Promise((resolve, reject) => {
      this.http.post(this.api_base + endpoint + this.parseQuery(query), body || {})
      .map(res => res.json())
      .subscribe(res => resolve(res));
    });
  }

}
