import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Disneyservice } from './disney-personajes.service';

import { FormsModule } from '@angular/forms';
//import { disneypersonajescomponent } from './disney-personajes.components';

@NgModule({
    declarations:[ 
        //disneypersonajescomponent      

    ],
    imports: [
        HttpClientModule,
        FormsModule
    

    ],
    exports:[
        //disneypersonajescomponent
    ],
    providers:[
        Disneyservice
    ]

})

export class disneymodule {}
