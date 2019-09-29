import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesServices } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styleUrls: ['./buscar-heroe.component.css']
})
export class BuscarHeroeComponent implements OnInit {

  heroesEncontrados: Heroe[];
  textoBuscado: string;

  constructor(
    private servicioBusqueda: HeroesServices,
    private activeRouter: ActivatedRoute
  ) {
    this.heroesEncontrados = [];
    this.textoBuscado = '';
  }

  ngOnInit() {
    this.activeRouter.params.subscribe(parametros => {
      this.textoBuscado = parametros['termino'];
      this.heroesEncontrados = this.servicioBusqueda.buscarHeroes(this.textoBuscado);
    })
  }

}
