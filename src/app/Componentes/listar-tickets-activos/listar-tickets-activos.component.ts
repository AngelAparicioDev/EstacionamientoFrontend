import { Component, OnInit } from '@angular/core';
import { EstacionamientoService } from '../../Servicios/estacionamiento.service';
import { Ticket } from '../../Modelos/ticket'
@Component({
  selector: 'app-listar-tickets-activos',
  templateUrl: './listar-tickets-activos.component.html',
  styleUrls: ['./listar-tickets-activos.component.css']
})
export class ListarTicketsActivosComponent implements OnInit {
  fecha: Date;
  tickets: Ticket[];
  constructor(private estacionamiento: EstacionamientoService) { }

  ngOnInit() {
    this.fecha = new Date();
    this.listarTickets();
  }

  listarTickets() {
    this.estacionamiento.listarTickets()
      .subscribe(res => {
        console.log(res);
        this.tickets = res as Ticket[];
      });
  }
  registrarSalidaTicket(licensePlate) {
    this.estacionamiento.registrarSalida(licensePlate).subscribe(
      res => {
        console.log(res);
        this.listarTickets();
      });
  }


}
