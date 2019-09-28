import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroe } from "../../services/heroes.service";
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  listaHeroes: Heroe[];

  constructor(
    private heroesServices: HeroesServices
  ) {

  }

  ngOnInit() {
    this.listaHeroes = [];

    this.listaHeroes = this.heroesServices.getHeroes();
    console.log(this.listaHeroes.length);
  }

}
