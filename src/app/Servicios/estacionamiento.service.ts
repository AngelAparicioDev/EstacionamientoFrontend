import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';

import { Ticket } from '../Modelos/ticket'
@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {

  constructor(private http: HttpClient) { }

  
  listarTickets(){
    return this.http.get(environment.apiUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  registrarTickect(ticket:Ticket){
    return this.http.post(environment.apiUrl,ticket).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  registrarSalida(licensePlate:string){
    var ticket = {
      "licensePlate" : licensePlate
    }
    return this.http.put(environment.apiUrl,ticket).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    console.log(error);
    errorMessage = error.error.message;
    return throwError(errorMessage);
  }
}
