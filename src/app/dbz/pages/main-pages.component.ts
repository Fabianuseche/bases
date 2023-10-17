import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-pages.component.html'
})

export class MainPageComponent implements OnInit {


  constructor(private dbzService: DbzService) {

   }

   get characters(): Character[]{
    return [...this.dbzService.dbzcharacters]
   }
   onDeleteCharacter( id: string ):void {
    this.dbzService.OnDeletedPersonajeById( id );
  }

  onNewCharacter( character: Character ):void {
    this.dbzService.nuevoPersonaje(character)
  }
  ngOnInit() { }
}
