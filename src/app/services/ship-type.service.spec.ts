import { TestBed, inject } from '@angular/core/testing';

import { ShipTypeService } from './ship-type.service';

describe('ShipTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShipTypeService]
    });
  });

  it('should be created', inject([ShipTypeService], (service: ShipTypeService) => {
    expect(service).toBeTruthy();
  }));
});
