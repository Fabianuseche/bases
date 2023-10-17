import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable
  ({ providedIn: 'root' })

export class DbzService {


  public dbzcharacters: Character[] = [
    {
      id: uuid(),
      name: "Krilin",
      power: 1500
    },
    {
      id: uuid(),
      name: "Goku",
      power: 7500
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 9000
    },
    {
      id: uuid(),
      name: "Bulma",
      power: 10
    }
  ];



  nuevoPersonaje(muneco: Character): void {

    const newMuneco: Character = { id: uuid(), ...muneco }

    this.dbzcharacters.push(newMuneco)
  }

  // onDeletePersonaje(index: number) {
  //   this.dbzcharacters.splice(index, 1);
  // }

  OnDeletedPersonajeById(id:string){
    this.dbzcharacters=this.dbzcharacters.filter(muneco =>muneco.id !== id)
  }

  constructor() { }

}
