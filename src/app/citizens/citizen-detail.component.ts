import {
  Component,
  Input,
  EventEmitter,
  OnChanges,
  Output,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Citizen } from '../core';

@Component({
  selector: 'app-citizen-detail',
  templateUrl: './citizen-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitizenDetailComponent implements OnChanges {
  @Input() citizen: Citizen;
  @Output() unselect = new EventEmitter<string>();
  @Output() save = new EventEmitter<Citizen>();

  addMode = false;
  editingCitizen: Citizen;

  ngOnChanges(changes: SimpleChanges) {
    if (this.citizen && this.citizen.id) {
      this.editingCitizen = this.citizen;
      this.addMode = false;
    } else {
      this.editingCitizen = { id: undefined, name: '', description: '' };
      this.addMode = true;
    }
  }

  clear() {
    this.unselect.emit();
  }

  saveCitizen() {
    this.save.emit(this.editingCitizen);
    this.clear();
  }
}
