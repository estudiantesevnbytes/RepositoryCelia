import { Component,OnInit,Input } from "@angular/core";

import { Disneyservice} from "./disney-personajes.service";
import { Personajes } from "./disney-personajes.interface";
import { FormsModule, NgModel } from "@angular/forms";
import { disneymodule } from "./disney-personajes.module";
import { DisneyPersonajes } from "./disney-personajes.components";
import { switchMap } from "rxjs";
import { ActivatedRoute, Router,Params } from "@angular/router";
import { AppComponent } from "../app.component";



import { Route } from "@angular/router";

@Component({
   selector:"infopersonajes",
   styleUrls:['infopersonajes.component.scss'],
   templateUrl:"infopersonajes.component.html"


})
export class InfoPersonajes implements OnInit{

  public Personaje!: Personajes;
  data!:number
  id=6
  

 
  constructor (
    private router:Router,
    private route:ActivatedRoute,
    private service:Disneyservice,
    private appcomponent:AppComponent,
    
  ){}




  ngOnInit():void{     
      
      
      this.service.getOnepersonaje(this.id)
        .subscribe((data: any)=> {
        this.Personaje=data})
          

        }

        
  incluirid():any{
    this.id=this.id
    this.service.getOnepersonaje(this.id)
    .subscribe((data: any)=> {
      this.Personaje=data.data;})
      console.log(this.Personaje)
   }
}



    





