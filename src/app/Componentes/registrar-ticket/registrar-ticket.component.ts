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

  constructor(private confirmationService: ConfirmationService, private service: MessageService, private formBuilder: FormBuilder,
    private estacionamiento: EstacionamientoService,private toast:ToastrService) { }

  ngOnInit() {
    this.ticket = new Ticket;
    this.types.push({ label: 'CARRO', value: { id: 0, name: 'CARRO' } });
    this.types.push({ label: 'MOTO', value: { id: 1, name: 'MOTO' } });
    this.inicializarFormulario();
    this.activarCilindraje();
  }

  get vehicleType() {
    return this.todoForm.get('typeVehicle');
  }

  inicializarFormulario(){
    this.todoForm = this.formBuilder.group({
      licensePlate: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z-0-9]*$/)]],
      displacement: '',
      typeVehicle: ''
    });
  }

  activarCilindraje() {
    const typeVehicle = this.todoForm.get('typeVehicle');  
    typeVehicle.valueChanges.subscribe(type => {
      if (type === "0") {
        this.cilindraje = false;
        this.todoForm.get('displacement').setValidators(null);
        this.ticket.typeVehicle = "CARRO";
      }
      if (type === "1") {
        this.cilindraje = true;
        this.ticket.typeVehicle = "MOTO";
        this.todoForm.get('displacement').setValidators([Validators.required]);
      }
    
    })

  }

  validarTexto() {
    var nuevo = this.ticket.licensePlate.replace(/[^a-z-A-Z0-9]+/g, "");
    this.ticket.licensePlate = nuevo.toUpperCase();
  }
  validarNumero() {
    this.ticket.displacement = this.ticket.displacement.replace(/[^0-9]+/g, "");
  }

  registrarTicket() {
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
    this.ticket = new Ticket();
    this.todoForm.get('displacement').setValidators(null);
  }

}
