import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListHeaderComponent } from './list-header.component';
import { CardContentComponent } from './card-content.component';
import { ButtonFooterComponent } from './button-footer.component';
import { ModalComponent } from './modal.component';

const components = [
  ButtonFooterComponent,
  CardContentComponent,
  ListHeaderComponent,
  ModalComponent
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [components],
  exports: [components, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
