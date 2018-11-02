import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent {
  @Input()
  heroes: Hero[];

  @Input()
  selectedHero: Hero;

  @Output()
  deleted = new EventEmitter<Hero>();

  @Output()
  selected = new EventEmitter<Hero>();

  constructor() {}

  byId(hero: Hero) {
    return hero.id;
  }

  onSelect(hero: Hero) {
    this.selected.emit(hero);
  }

  deleteHero(hero: Hero) {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '250px';
    // dialogConfig.data = {
    //   title: 'Delete Hero',
    //   message: `Do you want to delete ${hero.name}`
    // };

    // const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(deleteIt => {
      console.log('The dialog was closed');
      // if (deleteIt) {
        this.deleted.emit(hero);
      // }
    // });
  }
}
