import { Component } from '@angular/core';
export class Customer {
  public id: number;
  public name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customers: Customer[] = [{ id: 1, name: 'john' }];
}
