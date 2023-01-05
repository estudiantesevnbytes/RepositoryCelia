import { Component, OnInit } from "@angular/core";


import { Disneyservice} from "./disney-personajes.service";

import { Personajes } from "./disney-personajes.interface";

@Component({
   selector:"disney-personajes",
   styleUrls:['disney-personajes.component.scss'],
   templateUrl:"disney-personajes.component.html"


})
export class DisneyPersonajes {
   id!:number
}