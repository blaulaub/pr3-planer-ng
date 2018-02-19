import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ShipType } from '../ship-type';
import { SHIP_TYPES } from '../mock-ship-types';

@Injectable()
export class ShipTypeService {

  constructor() { }

  getShipTypes(): Observable<ShipType[]> {
    return of(SHIP_TYPES);
  }
}
