import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers/customers.component';
import { InventariosComponent } from './Inventario/inventarios/inventarios.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentsComponent } from './Payments/payments/payments.component';
import { SingUpCustomersComponent } from './customers/sing-up-customers/sing-up-customers.component';

const routes: Routes = [

  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'Clientes', component: CustomersComponent,
  },
  {
    path: 'Inventario', component: InventariosComponent,
  },
  {
    path: 'Pagos', component: PaymentsComponent,
  },
  {
    path: 'Registro', component: PaymentsComponent,
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
