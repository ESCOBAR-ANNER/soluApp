import { Component } from '@angular/core';
import { Customer } from '../customer-search/customers.interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles: [
  ]
})
export class CustomersComponent {

  showComponentes = false;

showComponent(){
  this.showComponentes = true;
}



}
