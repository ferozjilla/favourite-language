import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }   from '@angular/http';

import { AppComponent }  from './app.component';
import { ApiService } from './api.service';
import { UserService } from './user.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule
  ],
  declarations: [ AppComponent ],
  providers: [
    ApiService,
    UserService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
