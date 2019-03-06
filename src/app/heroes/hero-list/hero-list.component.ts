import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { Hero } from '../../core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent {
  @Input() heroes: Hero[];
  @Input() selectedHero: Hero;
  @Output() deleted = new EventEmitter<Hero>();
  @Output() selected = new EventEmitter<Hero>();

  selectHero(hero: Hero) {
    this.selected.emit(hero);
  }

  deleteHero(hero: Hero) {
    this.deleted.emit(hero);
  }

  byId(hero: Hero) {
    return hero.id;
  }
}
