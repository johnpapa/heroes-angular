import {
  Component,
  Input,
  EventEmitter,
  OnChanges,
  Output,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';

import { Villain } from '../core';

@Component({
  selector: 'app-villain-detail',
  templateUrl: './villain-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VillainDetailComponent implements OnChanges {
  @Input() villain: Villain;
  @Output() unselect = new EventEmitter<string>();
  @Output() save = new EventEmitter<Villain>();

  addMode = false;
  editingVillain: Villain;

  ngOnChanges(changes: SimpleChanges) {
    if (this.villain && this.villain.id) {
      this.editingVillain = { ...this.villain };
      this.addMode = false;
    } else {
      this.editingVillain = { id: undefined, name: '', description: '' };
      this.addMode = true;
    }
  }

  clear() {
    this.unselect.emit();
  }

  saveVillain() {
    this.save.emit(this.editingVillain);
    this.clear();
  }
}
