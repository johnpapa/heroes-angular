import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Villain } from '../core';
import { VillainService } from './villain.service';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html'
})
export class VillainsComponent implements OnInit {
  selected: Villain;
  villains$: Observable<Villain[]>;
  message = '?';
  villainToDelete: Villain;
  showModal = false;

  constructor(private villainService: VillainService) {
    this.villains$ = villainService.entities$;
  }

  ngOnInit() {
    this.getVillains();
  }

  add(villain: Villain) {
    this.villainService.add(villain);
  }

  askToDelete(villain: Villain) {
    this.villainToDelete = villain;
    this.showModal = true;
    if (this.villainToDelete.name) {
      this.message = `Would you like to delete ${this.villainToDelete.name}?`;
    }
  }

  clear() {
    this.selected = null;
  }

  closeModal() {
    this.showModal = false;
  }

  deleteVillain() {
    this.closeModal();
    if (this.villainToDelete) {
      this.villainService
        .delete(this.villainToDelete.id)
        .subscribe(() => (this.villainToDelete = null));
    }
    this.clear();
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getVillains() {
    this.villainService.getAll();
    this.clear();
  }

  save(villain: Villain) {
    if (this.selected && this.selected.name) {
      this.update(villain);
    } else {
      this.add(villain);
    }
  }

  select(villain: Villain) {
    this.selected = villain;
  }

  update(villain: Villain) {
    this.villainService.update(villain);
  }
}
