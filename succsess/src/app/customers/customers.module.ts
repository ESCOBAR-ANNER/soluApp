import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { SingUpCustomersComponent } from './sing-up-customers/sing-up-customers.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomersComponent,
    SingUpCustomersComponent,
    CustomerSearchComponent

  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports:[
    CustomersComponent
  ]
})
export class CustomersModule { }
