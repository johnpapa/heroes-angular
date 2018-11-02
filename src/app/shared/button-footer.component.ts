import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-footer',
  template: `
    <a
      [ngClass]="className"
      [attr.aria-label]="label"
      role="button"
      tabIndex="0"
      (click)="handleClick()"
      [attr.data-index]="dataIndex"
      [attr.data-id]="dataId"
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
  dataIndex;
  @Input()
  dataId;

  constructor() {}

  ngOnInit() {}

  handleClick() {}
}
