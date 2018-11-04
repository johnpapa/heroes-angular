import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-footer',
  template: `
    <a
      [ngClass]="className"
      [attr.aria-label]="label"
      role="button"
      tabIndex="0"
      [attr.data-id]="item.id"
      (click)="handleClick()"
    >
      <i [ngClass]="iconClasses"></i>
      <span>{{label}}</span>
    </a>
  `
})
export class ButtonFooterComponent implements OnInit {
  @Input() label;
  @Input() className;
  @Input() iconClasses;
  @Input() item;
  @Input() dataId;

  @Output()
  clicked = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  handleClick() {
    this.clicked.emit(this.item);
  }
}
