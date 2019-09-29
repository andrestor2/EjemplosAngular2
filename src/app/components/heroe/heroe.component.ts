import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServices } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor(
    private activateRoute: ActivatedRoute,
    private heroService: HeroesServices
  ) {
    this.activateRoute.params.subscribe(params => {
      this.heroe = this.heroService.getHeroe(params['id']);
    })
  }


}
