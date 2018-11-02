import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillainsComponent } from './villains/villains.component';

@NgModule({
  imports: [CommonModule],
  exports: [VillainsComponent],
  declarations: [VillainsComponent]
})
export class VillainsModule {}
