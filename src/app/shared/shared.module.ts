import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListHeaderComponent } from './list-header.component';
import { CardContentComponent } from './card-content.component';
import { ButtonFooterComponent } from './button-footer.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    ButtonFooterComponent,
    CardContentComponent,
    ListHeaderComponent
  ],
  exports: [
    ButtonFooterComponent,
    CardContentComponent,
    ListHeaderComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
