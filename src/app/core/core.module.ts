import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavComponent } from './nav.component';
import { HeaderComponent } from './header.component';
import { NotFoundComponent } from './not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule, // because we use <router-outlet> and routerLink
    SharedModule
  ],
  exports: [
    NavComponent,
    HeaderComponent,
    NotFoundComponent,
    FontAwesomeModule
  ],
  declarations: [
    NavComponent,
    HeaderComponent,
    NotFoundComponent,
  ]
})
export class CoreModule {}
