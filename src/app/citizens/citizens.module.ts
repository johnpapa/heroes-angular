import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CitizensComponent } from './citizens.component';
import { CitizenListComponent } from './citizen-list.component';
import { CitizenDetailComponent } from './citizen-detail.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CitizensComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, CitizensComponent],
  declarations: [
    CitizensComponent,
    CitizenListComponent,
    CitizenDetailComponent,
  ],
})
export class CitizensModule {}
