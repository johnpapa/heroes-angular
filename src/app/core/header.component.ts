import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
<header>
  <nav class="navbar has-background-dark is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://angular.io/" target="_blank" rel="noopener noreferrer">
        <i class="fab js-logo fa-angular fa-2x" aria-hidden="true"></i>
      </a>
      <a class="navbar-item nav-home" router-link="/">
        <span class="tour">TOUR</span>
        <span class="of">OF</span>
        <span class="heroes">HEROES</span>
      </a>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a href="https://github.com/johnpapa/heroes-react" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github fa-2x" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/john_papa" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
  `
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
