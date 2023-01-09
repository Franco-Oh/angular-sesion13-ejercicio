import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  texto!:string;
  monto!:number;
  monedas:string[]=["USD","EUR","S/ "];
  seleccionado!:string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
