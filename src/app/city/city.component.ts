import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { City } from '../city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  gameId: number;

  city: City;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cityService: CityService
  ) { }

  ngOnInit() {
    this.gameId = +this.route.snapshot.paramMap.get('gameId');
    const cityId = +this.route.snapshot.paramMap.get('cityId');
    this.cityService.getCity(this.gameId, cityId).subscribe(city => this.city = city);
  }

}
