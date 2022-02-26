import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-header',
  template: `
    <div class="content-title-group">
      <a router-link="/">
        <h2 class="title">{{title}}</h2>
      </a>
      <button
        style="margin-left: 10px"
        class="button add-button"
        (click)="handleAdd()"
        aria-label="add"
      >
        <i class="fas fa-plus" aria-hidden="true"></i>
      </button>
      <button
        style="margin-left: 10px"
        class="button refresh-button"
        (click)="handleRefresh()"
        aria-label="refresh"
      >
        <i class="fas fa-sync" aria-hidden="true"></i>
      </button>
    </div>
  `
})
export class ListHeaderComponent implements OnInit {
  @Input() title: string;
  @Output() add = new EventEmitter();
  @Output() refresh = new EventEmitter();

  ngOnInit() {}

  handleAdd() {
    this.add.emit();
  }
  handleRefresh() {
    this.refresh.emit();
  }
}
