import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  fecha :Date;
  precios = [];
  constructor() { }

  ngOnInit() {
    this.fecha = new Date();
    this.precios.push({"horaMoto":"500","horaCarro":"1000","diaCarro":"8000","diaMoto":"4000","extraMoto":"2000"});
  }

}
