import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Facility } from '../facility';
import { FACILITIES } from '../mock-facilities';

@Injectable()
export class FacilityService {

  constructor() { }

  getFacilities(): Observable<Facility[]> {
    return of(FACILITIES);
  }
}
