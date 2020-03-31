import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
  TrackByFunction
} from '@angular/core';
import { Villain } from '../core';

@Component({
  selector: 'app-villain-list',
  templateUrl: './villain-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VillainListComponent {
  @Input() villains: Villain[];
  @Output() deleted = new EventEmitter<Villain>();
  @Output() selected = new EventEmitter<Villain>();

  // byId(villain: Villain) {
  //   return villain.id;
  // }
  foo(villain: Villain): string {
    return villain.id;
  }

  trackByVillain(index: number, villain: Villain): string {
    return villain.id;
  }

  selectVillain(villain: Villain) {
    this.selected.emit(villain);
  }

  deleteVillain(villain: Villain) {
    this.deleted.emit(villain);
  }
}
