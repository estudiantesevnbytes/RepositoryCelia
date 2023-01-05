import{Injectable} from '@angular/core'


import {HttpClient, HttpResponse, } from "@angular/common/http";
import { concat, merge, Observable, ObservableInput, of, forkJoin} from 'rxjs';

import { Personajes } from './disney-personajes.interface';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

const DISNEY_API: string= "/api.disneyapi";


@Injectable({
    providedIn: 'root',
})
    
export class Disneyservice{
  
  private readonly DISNEY_API:string ="https://api.disneyapi.dev/characters";
  
  private readonly DISNEY_APIONE:string ='https://api.disneyapi.dev/characters/:';

  Personajes!:Observable< Personajes[]>;
  Personaje!:Observable< Personajes[]>;
  

   id=6
   n!:number 



constructor(
  public httpClient:HttpClient,
  public router:Router
  ){};



getPaged(n:number):any {
  return this.DISNEY_API+"?page="+n
}

getOne(id:number):any{
  return this.DISNEY_APIONE+id 
}

getPersonajes(n:number):Observable<Personajes[]>{ 
    this.Personajes=this.httpClient.get<any[]>(this.getPaged(n)) 
    return this.Personajes;
}

getOnepersonaje(id:number):Observable<Personajes[]>{
  this.Personaje=this.httpClient.get<any[]>(this.getOne(id))
  return this.Personaje;
}

}


function get(arg0: string) {
  throw new Error('Function not implemented.');
}

