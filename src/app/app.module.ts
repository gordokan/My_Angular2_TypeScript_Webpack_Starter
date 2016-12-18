//This is the roooot module!

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Meals }  from './meals';
import 'lodash';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, Meals ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

 }