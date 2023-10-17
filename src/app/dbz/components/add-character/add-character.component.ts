import { Component, EventEmitter,Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewPersonaje: EventEmitter<Character> = new EventEmitter();

  public personaje: Character={
    name:'',
    power:0
  }

  emitCharacter():void{

    if(this.personaje.name.length===0) return;

    this.onNewPersonaje.emit (this.personaje)

    this.personaje = {name:'', power:0}
  }

}
