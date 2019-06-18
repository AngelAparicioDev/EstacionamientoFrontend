import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { url } from '../Modelos/url'
import { Ticket } from '../Modelos/ticket'
@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {
  readonly URL_API = new url().url;
  constructor(private http: HttpClient) { }

  
  listarTickets(){
    return this.http.get(this.URL_API).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  registrarTickect(ticket:Ticket){
    return this.http.post(this.URL_API,ticket).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  registrarSalida(licensePlate:string){
    var ticket = {
      "licensePlate" : licensePlate
    }
    return this.http.put(this.URL_API,ticket).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    errorMessage = error.error.message;
    return throwError(errorMessage);
  }
}
