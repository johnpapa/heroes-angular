import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Villain } from '../../core';

@Component({
  selector: 'app-villain-list',
  templateUrl: './villain-list.component.html'
})
export class VillainListComponent {
  @Input()
  villains: Villain[];

  @Input()
  selectedVillain: Villain;

  @Output()
  deleted = new EventEmitter<Villain>();

  @Output()
  selected = new EventEmitter<Villain>();

  constructor() {}

  byId(villain: Villain) {
    return villain.id;
  }

  selectVillain(villain: Villain) {
    this.selected.emit(villain);
  }

  deleteVillain(villain: Villain) {
    this.deleted.emit(villain);
  }
}
