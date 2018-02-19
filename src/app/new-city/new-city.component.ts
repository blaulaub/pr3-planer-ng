import { Component, OnInit } from '@angular/core';

import { City } from '../city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-new-city',
  templateUrl: './new-city.component.html',
  styleUrls: ['./new-city.component.css']
})
export class NewCityComponent implements OnInit {

  city: City;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.resetCity();
  }

    resetCity(): City {
      var previous: City = this.city;
      this.city = { id: null, name: "", population: 900, warehouses: 0 };
      return previous;
    }

    addCity() {
      this.cityService.addCity(this.resetCity());
    }
}
