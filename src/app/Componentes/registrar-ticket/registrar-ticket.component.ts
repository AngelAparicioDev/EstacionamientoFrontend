import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/primeng';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstacionamientoService } from '../../Servicios/estacionamiento.service';
import { Ticket } from '../../Modelos/ticket'
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-registrar-ticket',
  templateUrl: './registrar-ticket.component.html',
  styleUrls: ['./registrar-ticket.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class RegistrarTicketComponent implements OnInit {
  todoForm: FormGroup;
  cilindraje: boolean;
  types = [];
  ticket: Ticket;
  type;
  constructor(private confirmationService: ConfirmationService, private service: MessageService, private formBuilder: FormBuilder,
    private estacionamiento: EstacionamientoService,private toast:ToastrService) { }

  ngOnInit() {
    this.ticket = new Ticket;
    this.types.push({ label: 'CARRO', value: { id: 0, name: 'CARRO' } });
    this.types.push({ label: 'MOTO', value: { id: 1, name: 'MOTO' } });
    this.type = { id: 0, name: 'CARRO' };
    this.inicializarFormulario();
  }

  inicializarFormulario(){
    this.todoForm = this.formBuilder.group({
      licensePlate: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z-0-9]*$/)]],
      displacement: '',
      typeVehicle: ''
    });
  }

  activarCilindraje() {
    if (this.type.id == 1) {
      this.cilindraje = true;
      this.todoForm.get('displacement').setValidators([Validators.required]);
    } else {
      this.cilindraje = false;
      this.todoForm.get('displacement').setValidators(null);
    }
  }

  validarTexto() {
    var nuevo = this.ticket.licensePlate.replace(/[^a-z-A-Z0-9]+/g, "");
    this.ticket.licensePlate = nuevo.toUpperCase();
  }
  validarNumero() {
    this.ticket.displacement = this.ticket.displacement.replace(/[^0-9]+/g, "");
  }

  registrarTicket() {
    this.ticket.typeVehicle = this.type.name;
    this.estacionamiento.registrarTickect(this.ticket).subscribe(
      res => {
        if(res){
          this.toast.success("se registro la entrada del vehiculo: " + res['value']['licensePlate'] + ", con exito","Registro de entrada");
          this.limpiarFormulario();
        }
      }, err => {
        this.toast.error(err,"Error al ingresar:");
      });
  }

  limpiarFormulario(){
    this.type = { id: 0, name: 'CARRO' };
    this.ticket = new Ticket();
    this.todoForm.get('displacement').setValidators(null);
  }

}
