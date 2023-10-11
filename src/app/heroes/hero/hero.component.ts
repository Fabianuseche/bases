import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string='ironMan';
  public age: number=45;

get capitalizedName():string{
  return this.name.toLocaleUpperCase();
}
public getHeroDescription():string {
  return `${this.name} - ${this.age}`
}
public changeName():void{
  this.name ='SpiderMan'
}
  public changeAge():void{
    this.age =25
  }
  public reset(): void{
    this.name ='ironman';
    this.age =45;
  }
}
