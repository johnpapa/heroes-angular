import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Citizen } from '../core';

@Component({
  selector: 'app-citizen-list',
  templateUrl: './citizen-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitizenListComponent {
  @Input() citizens: Citizen[];
  @Output() deleted = new EventEmitter<Citizen>();
  @Output() selected = new EventEmitter<Citizen>();

  selectCitizen(citizen: Citizen) {
    this.selected.emit(citizen);
  }

  deleteCitizen(citizen: Citizen) {
    this.deleted.emit(citizen);
  }

  trackByCitizen(_: /* index not used */ number, citizen: Citizen): string {
    return citizen.id;
  }
}
