import { Component, OnInit } from '@angular/core';
import { EstacionamientoService } from '../../Servicios/estacionamiento.service';
import { Ticket } from '../../Modelos/ticket'
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-listar-tickets-activos',
  templateUrl: './listar-tickets-activos.component.html',
  styleUrls: ['./listar-tickets-activos.component.css']
})
export class ListarTicketsActivosComponent implements OnInit {
  fecha: Date;
  tickets: Ticket[];
  constructor(private estacionamiento: EstacionamientoService,private toast:ToastrService) { }

  ngOnInit() {
    this.fecha = new Date();
    this.listarTickets();
  }

  listarTickets() {
    this.estacionamiento.listarTickets()
      .subscribe(res => {
        this.tickets = res as Ticket[];
      }, err => {
        this.toast.error(err,"error al listar vehiculos:");
      });
  }

  registrarSalidaTicket(licensePlate) {
    this.estacionamiento.registrarSalida(licensePlate).subscribe(
      res => {
        if(res){
          this.toast.success("se registro la salida del vehiculo: " + licensePlate + ", con un costo de :" + res['value'],"Salida del estacionamiento:");
          this.listarTickets();
        }else{
          this.toast.error("ocurrio un error al registrar salida");
        }
      }, err => {
        this.toast.error(err,"Error al salir:");
      });
  }




}
