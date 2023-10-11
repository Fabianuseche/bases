import { Component } from '@angular/core';


@Component  ({
  selector: 'app-counter',
  template: `<h2>{{contador}}</h2>

  <button (click)="plus()">+</button>
  <button (click)="reset()">reset</button>
  <button (click)="minus()">-</button>
  `
})

  export class CounterComponent{
    constructor(){}

    public contador: number=0

    plus():void{
     this.contador+=1;
   }
   minus():void{
     this.contador-=1
   }
   reset():void{
     this.contador=0
   }
  }
