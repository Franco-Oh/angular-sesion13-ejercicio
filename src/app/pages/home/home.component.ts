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
  
  // Datos predefinidos para el JSON
  personas = [{
    "Apellido": "Arcila",
    "Casado": false,
    "Dirección": "Calle 35",
    "Nombre": "Diego",
    "Telefono": 3859720
  },{
    "Apellido": "Bueno",
    "Casado": false,
    "Dirección": "CR #53",
    "Nombre": "Kevin",
    "Telefono": 31485579954
  },{
    "Apellido": "Palomino",
    "Casado": false,
    "Dirección": "CR #52",
    "Nombre": "Natalia",
    "Telefono": 32255945555
  }
  ]

  //Agregar datos para JSON
  apell!:string;
  casado = false;
  dir!:string;
  nom!:string;
  telef!:number;

  agregar(){
    this.personas.push({
      Apellido: this.apell,
      Casado: this.casado,
      Dirección: this.dir,
      Nombre: this.nom,
      Telefono: this.telef
    })
    }

  constructor() { }

  ngOnInit(): void {
  }

}
