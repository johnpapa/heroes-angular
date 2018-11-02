import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  selected: Hero;
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService) {
    this.heroes$ = heroService.entities$;
  }

  ngOnInit() {
    this.getHeroes();

    // TODO: select for now so i can style this
    this.heroes$.subscribe(h => {
      // this.selected = h[0];
    });
  }

  add(hero: Hero) {
    this.heroService.add(hero);
  }

  clear() {
    this.selected = null;
  }

  close() {
    this.selected = null;
  }

  delete(hero: Hero) {
    this.heroService.delete(hero.id);
    this.close();
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getHeroes() {
    this.heroService.getAll();
    this.close();
  }

  save(hero: Hero) {
    if (this.selected && this.selected.name) {
      hero.id = `Hero${hero.name}`; // Making our own key - or we could config ngrxdata to let it pass to db
      this.update(hero);
    } else {
      this.add(hero);
    }
  }

  select(hero: Hero) {
    this.selected = hero;
  }

  update(hero: Hero) {
    this.heroService.update(hero);
  }
}
