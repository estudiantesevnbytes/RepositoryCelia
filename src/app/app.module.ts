import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { Disneyservice } from './disney-personajes/disney-personajes.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module'




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
 
    AppRoutingModule

  ],



  providers: [
    Disneyservice,
    AppComponent,
  ],

  bootstrap: [AppComponent]
  
})
export class AppModule { }
