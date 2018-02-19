import { Component, OnInit } from '@angular/core';

import { Facility } from '../facility';
import { FacilityService } from '../services/facility.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  facilities: Facility[];

  constructor(private facilityService: FacilityService) { }

  ngOnInit() {
    this.facilityService.getFacilities().subscribe(facilities => this.facilities = facilities);
  }
}
