import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="content-container">
      <div class="content-title-group not-found">
        <h2 class="title">Tour of Heroes</h2>
        <p>
          This project was created to help represent a fundamental app written
          with Angular. The heroes and villains theme is used throughout the
          app.
        </p>
        <p>by <a href="http://twitter.com/john_papa">John Papa</a></p>
        <br />
        <h2 class="title">Why</h2>
        <p>
          I love JavaScript and the Web! One of the most common questions I hear
          is "which framework is best?". I like to flip this around and ask you
          "which is best for you?". The best way to know this is to try it for
          yourself. I'll follow up with some articles on my experiences with
          these frameworks but in the meantime, please try it for yourself to
          gain your own experience with each.
        </p>
        <br />
        <h2 class="title">Comparative Apps</h2>
        <ul>
          <li>
            <a href="https://github.com/johnpapa/heroes-angular"
              >github.com/johnpapa/heroes-angular</a
            >
          </li>
          <li>
            <a href="https://github.com/johnpapa/heroes-react"
              >github.com/johnpapa/heroes-react</a
            >
          </li>
          <li>
            <a href="https://github.com/johnpapa/heroes-vue"
              >github.com/johnpapa/heroes-vue</a
            >
          </li>
        </ul>
        <br />
        <h2 class="title">Live Demos</h2>
        <p>Hosted in <a href="https://aka.ms/jp-free">Azure</a></p>

        <ul>
          <li>
            <a href="https://papa-heroes-angular.azurewebsites.net"
              >Tour of Heroes with Angular</a
            >
          </li>
          <li>
            <a href="https://papa-heroes-react.azurewebsites.net"
              >Tour of Heroes with React</a
            >
          </li>
          <li>
            <a href="https://papa-heroes-vue.azurewebsites.net"
              >Tour of Heroes with Vue</a
            >
          </li>
        </ul>
      </div>
    </div>
  `
})
export class AboutComponent {}
