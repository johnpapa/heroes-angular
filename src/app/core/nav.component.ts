import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  template: `
  <nav class="menu">
    <p class="menu-label">Menu</p>
    <ul class="menu-list">
      <a routerLink="/heroes" routerLinkActive="active-link">
        <span>Heroes</span>
      </a>
      <a routerLink="/villains" routerLinkActive="active-link">
        <span>Villains</span>
      </a>
      <a routerLink="/about" routerLinkActive="active-link">
        <span>About</span>
      </a>
    </ul>
  </nav>
  `
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
