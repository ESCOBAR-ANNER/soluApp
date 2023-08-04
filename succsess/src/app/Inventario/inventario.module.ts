import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventariosComponent } from './inventarios/inventarios.component';



@NgModule({
  declarations: [
    InventariosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InventariosComponent
  ]
})
export class InventarioModule { }
