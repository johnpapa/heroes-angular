import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from '../core';

@Component({
  selector: 'app-button-footer',
  template: `
    <a
      [ngClass]="className"
      [attr.aria-label]="label"
      role="button"
      tabIndex="0"
      (click)="handleClick()"
    >
      <i [ngClass]="iconClasses"></i>
      <span>{{label}}</span>
    </a>
  `
})
export class ButtonFooterComponent implements OnInit {
  @Input()
  label;
  @Input()
  className;
  @Input()
  iconClasses;
  @Input()
  item;

  @Output()
  clicked = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  handleClick() {
    this.clicked.emit(this.item);
  }
}
