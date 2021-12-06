import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Citizen } from '../core';
import { CitizenService } from './citizen.service';

@Component({
  selector: 'app-citizens',
  templateUrl: './citizens.component.html',
})
export class CitizensComponent implements OnInit {
  selected: Citizen;
  citizens$: Observable<Citizen[]>;
  message = '?';
  citizenToDelete: Citizen;
  showModal = false;

  constructor(private citizenService: CitizenService) {
    this.citizens$ = citizenService.entities$;
  }

  ngOnInit() {
    this.getCitizens();
  }

  add(citizen: Citizen) {
    this.citizenService.add(citizen);
  }

  askToDelete(citizen: Citizen) {
    this.citizenToDelete = citizen;
    this.showModal = true;
    if (this.citizenToDelete.name) {
      this.message = `Would you like to delete ${this.citizenToDelete.name}?`;
    }
  }

  clear() {
    this.selected = null;
  }

  closeModal() {
    this.showModal = false;
  }

  deleteCitizen() {
    this.closeModal();
    if (this.citizenToDelete) {
      this.citizenService
        .delete(this.citizenToDelete.id)
        .subscribe(() => (this.citizenToDelete = null));
    }
    this.clear();
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getCitizens() {
    this.citizenService.getAll();
    this.clear();
  }

  save(citizen: Citizen) {
    if (this.selected && this.selected.name) {
      this.update(citizen);
    } else {
      this.add(citizen);
    }
  }

  select(citizen: Citizen) {
    this.selected = citizen;
  }

  update(citizen: Citizen) {
    this.citizenService.update(citizen);
  }
}
