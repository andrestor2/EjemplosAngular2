import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroe } from "../../services/heroes.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  listaHeroes: Heroe[];

  constructor(
    private heroesServices: HeroesServices,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.listaHeroes = [];

    this.listaHeroes = this.heroesServices.getHeroes();
  }

  verHeroe(index: number) {
    this.router.navigate(['/heroe', index]);
  }

}
