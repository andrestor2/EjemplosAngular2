import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  
  nombre = "Fernando";
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  PI = Math.PI;
  value = 0.23455;
  salario = 1584000;

  heroe = {
    nombre: "Logan",
    clave: "Wolvierine",
    edad: 500,
    direccion: {
      cakke: "Primera",
      casa: 20
    }
  };

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Llego la data!');
    },
      3500);
  });

  fechaI = new Date();



  constructor() { }

  ngOnInit() {
  }

}
