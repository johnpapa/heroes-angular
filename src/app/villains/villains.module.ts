import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { VillainDetailComponent } from './villain-detail.component';
import { VillainListComponent } from './villain-list.component';
import { VillainsComponent } from './villains.component';

const routes: Routes = [
  {
    path: '',
    component: VillainsComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, VillainsComponent],
  declarations: [
    VillainsComponent,
    VillainListComponent,
    VillainDetailComponent
  ]
})
export class VillainsModule {}
