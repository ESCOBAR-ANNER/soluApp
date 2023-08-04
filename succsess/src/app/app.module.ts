import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CustomersModule } from './customers/customers.module';
import { InventariosComponent } from './Inventario/inventarios/inventarios.component';
import { InventarioModule } from './Inventario/inventario.module';
import { PaymentsModule } from './Payments/payments.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomersModule,
    FormsModule,
    PaymentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
