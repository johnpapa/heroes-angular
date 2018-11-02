import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Hero } from '../core';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal" [ngClass]="{ 'is-active': this.isOpen }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Confirm</p>
        </header>
        <section class="modal-card-body">
          {{message}}
        </section>
        <footer class="modal-card-foot">
          <button class="button modal-no" (click)="onNo()">No</button>
          <button class="button is-primary modal-yes" (click)="onYes()">Yes</button>
        </footer>
      </div>
    </div>
  `
})
export class ModalComponent implements OnInit {
  @Input() message;

  @Input() isOpen = false;

  @Output()
  handleYes = new EventEmitter();
  @Output()
  handleNo = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onNo = () => {
    this.handleNo.emit();
  }

  onYes = () => {
    this.handleYes.emit();
  }

  // close = () => this.isOpen = false;
  // show = () => this.isOpen = true;
}

// <h1>{message}</h1>
// <div className="buttons">
//   <button
//     className="button is-light"
//     data-modal-response="yes"
//     onClick={onClick}
//   >
//     Yes
//   </button>
//   <button
//     className="button is-light"
//     data-modal-response="no"
//     onClick={onClick}
//   >
//     No
//   </button>
// </div>
