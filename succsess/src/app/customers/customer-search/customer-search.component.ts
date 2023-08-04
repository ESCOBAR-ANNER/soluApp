import { Component } from '@angular/core';
import { Customer } from './customers.interface';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styles: [
  ]
})
export class CustomerSearchComponent {

  arrayCustomers: Customer[] = [{
    firsName: 'Juan',
    lastName: 'Perez',
    age: 28,
    address: 'Calle 123',
    phone: '12345689',
    email: 'anner123escobar@gmail.com',
    coordinates: 'w3748449 N38953934'
  },
  {
    firsName: 'Maria',
    lastName: 'Perez',
    age: 28,
    address: 'Calle 123',
    phone: '12345679',
    email: 'correovacio',
    coordinates: 'w3748449 N38953934'
  },
  {
    firsName: 'Anner Ronaldo',
    lastName: 'Escobar Cruz',
    age: 25,
    address: 'Aldea Sitio Viejo',
    phone: '41374585',
    email: 'aescobarc13@miumg.edu.gt',
    coordinates: '14.309725, -89.933658',
  }
  ]
}
