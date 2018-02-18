import { Component, OnInit } from '@angular/core';

import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities: City[];

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityService.getCities()
      .subscribe(heroes => this.cities = heroes);
  }

}