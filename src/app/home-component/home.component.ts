import{Component} from '@angular/core';
import{Router} from '@angular/router'

@Component({
    selector:'app-home',
    styleUrls:['home.component.scss'],
    templateUrl: 'home.component.html'
})

export class homecomponent{
    id!:number;
    name:string="";


    constructor(
        private router:Router
    ){}

    Personajeid(id:any):void{
        this.router.navigate(['InfoPersonaje/id',id])

    }
}