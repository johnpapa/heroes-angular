import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { HeaderBarBrandComponent } from './header-bar-brand.component';
import { HeaderBarLinksComponent } from './header-bar-links.component';
import { HeaderBarComponent } from './header-bar.component';
import { NavComponent } from './nav.component';
import { NotFoundComponent } from './not-found.component';

const components = [
  NavComponent,
  HeaderBarComponent,
  HeaderBarBrandComponent,
  HeaderBarLinksComponent,
  NotFoundComponent
];

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule, // because we use <router-outlet> and routerLink
    SharedModule
  ],
  exports: [FontAwesomeModule, components],
  declarations: [components]
})
export class CoreModule {}
