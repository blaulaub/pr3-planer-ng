import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { City } from '../city';
import { CITIES } from '../mock-cities';

@Injectable()
export class CityService {

  constructor() { }

  getCities(gameId: number): Observable<City[]> {
    return of(CITIES);
  }

  addCity(city: City) {
    // TODO actually city has to persisted via server and id generated there
    city.id = Math.floor(Math.random() * 32000) + 1;
    CITIES.push(city);
  }

  getCity(gameId: number, cityId: number): Observable<City> {
    return of(CITIES.find(city => city.id == cityId));
  }
}
