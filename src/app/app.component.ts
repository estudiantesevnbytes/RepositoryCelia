import { Component,EventEmitter, Input, OnInit,Output,ViewChild,AfterViewInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import {Personajes} from './disney-personajes/disney-personajes.interface';

import { Disneyservice } from './disney-personajes/disney-personajes.service';
import { Observable, forkJoin} from 'rxjs';
import { InfoPersonajes } from './disney-personajes/infopersonajes.component';
import { ViewEncapsulation } from '@angular/compiler';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl:'./app.component.html',

 })



export class AppComponent implements OnInit{
 
  info:boolean=false
 
  




  title(title: any) {
    throw new Error('Method not implemented.');
  }

  public Personajes!: Personajes[];
  public Personaje!: Personajes;

  n!:number;
  id!:number
 

  constructor (
    private service:Disneyservice,
    private router: Router
    ){
  }
  

  ngOnInit():void{
    this.service.getPersonajes(this.n)
      .subscribe((data: any)=> {
        this.Personajes=data.data;

      });


    }

  sumar(sumar: any) {
    throw new Error('Method not implemented.');
  }

  restar(restar: any) {
    throw new Error('Method not implemented.');
  }


 agregar(){
  if (this.n==0) {
    alert('Debe ingresar un numero de articulo distinto a cero');
    return;
 }
  if (this.n!==0){
    this.n=this.n 
  }
  this.service.getPersonajes(this.n)
  .subscribe((data: any)=> {
    this.Personajes=data.data; })  
  }


 agregar2():void{
  this.router.navigate(['InfoPersonajes/id'])

 }





 }



