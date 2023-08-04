import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})

export class SidebarComponent {

  arraySidebar: String[] = [
    "Clientes",
    "Pagos",
    "Inventario",
    "Estadisticas",
    "Reportes",
    "Proveedores",
    "R. Humano",
    "Infraestructura",
    "Notificaciones",
    "Configuraciones",
    "Ayuda",
  ];

}
