import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { NotFoundComponent } from './core';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./heroes/heroes.module').then((m) => m.HeroesModule),
  },
  {
    path: 'citizens',
    loadChildren: () =>
      import('./citizens/citizens.module').then((m) => m.CitizensModule),
  },
  {
    path: 'villains',
    loadChildren: () =>
      import('./villains/villains.module').then((m) => m.VillainsModule),
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];
