import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DisneyPersonajes } from './disney-personajes/disney-personajes.components';
import { InfoPersonajes } from './disney-personajes/infopersonajes.component'; 
import { homecomponent } from './home-component/home.component';


const routes: Routes = [
    {path:'',component: homecomponent},
    {path:'DisneyPersonajes', component:DisneyPersonajes},
    {path:'InfoPersonajes/id', component:InfoPersonajes},
   
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


