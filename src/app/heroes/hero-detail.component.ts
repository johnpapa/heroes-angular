import {
  Component,
  Input,
  EventEmitter,
  OnChanges,
  Output,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';

import { Hero } from '../core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnChanges {
  @Input() hero: Hero;
  @Output() unselect = new EventEmitter<string>();
  @Output() save = new EventEmitter<Hero>();

  addMode = false;
  editingHero: Hero;

  ngOnChanges(changes: SimpleChanges) {
    if (this.hero && this.hero.id) {
      this.editingHero = { ...this.hero };
      this.addMode = false;
    } else {
      this.editingHero = { id: undefined, name: '', description: '' };
      this.addMode = true;
    }
  }

  clear() {
    this.unselect.emit();
  }

  saveHero() {
    this.save.emit(this.editingHero);
    this.clear();
  }
}
