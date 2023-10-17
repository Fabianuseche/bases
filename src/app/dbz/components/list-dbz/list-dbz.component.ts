import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list-dbz',
  templateUrl: './list-dbz.component.html',
  styleUrls: ['./list-dbz.component.css']
})
export class ListDbzComponent {

  @Input('delPapa')
  public  characterList: Character[]=[{
    id: '',
    name: 'Valor por deefcto',
    power: 0
  }]


@Output()
public onDelete:EventEmitter<string> = new EventEmitter();

  onDeletePersonaje( id?: string ):void{
    if ( !id ) return;
    this.onDelete.emit( id );
  }
}
