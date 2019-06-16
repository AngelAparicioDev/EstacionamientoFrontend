import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarTicketComponent } from './Componentes/registrar-ticket/registrar-ticket.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ListarTicketsActivosComponent } from './Componentes/listar-tickets-activos/listar-tickets-activos.component';
const routes: Routes = [{ path: '', component: InicioComponent }, { path: 'Registrar', component: RegistrarTicketComponent}, { path: 'Listar', component: ListarTicketsActivosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
