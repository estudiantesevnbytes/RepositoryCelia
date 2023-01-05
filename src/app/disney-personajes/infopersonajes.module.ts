import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Disneyservice } from './disney-personajes.service';
//import { disneypersonajescomponent } from './disney-personajes.components';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { InfoPersonajes } from './infopersonajes.component';
import { FormsModule } from '@angular/forms';
import { DisneyPersonajes } from './disney-personajes.components';


@NgModule({
    declarations:[
        InfoPersonajes,
        DisneyPersonajes
        //disneypersonajescomponent      

    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        AppComponent

    ],
    exports:[
        //disneypersonajescomponent
    ],
    providers:[
        Disneyservice,
        InfoPersonajes
    ],
    bootstrap: [InfoPersonajes],


})

export class infodisneymodule {}