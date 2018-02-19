import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Good } from '../good';
import { GOODS } from '../mock-goods';

@Injectable()
export class GoodService {

  constructor() { }

  getGoods(): Observable<Good[]> {
    return of(GOODS);
  }
}
