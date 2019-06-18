import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarTicketComponent } from './Componentes/registrar-ticket/registrar-ticket.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ListarTicketsActivosComponent } from './Componentes/listar-tickets-activos/listar-tickets-activos.component';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule, PanelModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { ToastrModule } from 'ngx-toastr';
import { DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarTicketComponent,
    InicioComponent,
    ListarTicketsActivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule, BrowserModule, InputTextareaModule, FormsModule, PanelModule, DropdownModule, TableModule,
    MessageModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    })
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
