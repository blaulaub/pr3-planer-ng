import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { City } from '../city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  gameId: number;

  cities: City[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cityService: CityService
  ) { }

  ngOnInit() {
    this.gameId = +this.route.snapshot.paramMap.get('gameId');
    this.cityService.getCities(this.gameId).subscribe(cities => this.cities = cities);
  }
}
