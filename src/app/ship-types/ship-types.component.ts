import { Component, OnInit } from '@angular/core';

import { ShipType } from '../ship-type';
import { ShipTypeService } from '../services/ship-type.service';

@Component({
  selector: 'app-ship-types',
  templateUrl: './ship-types.component.html',
  styleUrls: ['./ship-types.component.css']
})
export class ShipTypesComponent implements OnInit {

  shipTypes : ShipType[];

  constructor(private shipTypeService: ShipTypeService) { }

  ngOnInit() {
    this.shipTypeService.getShipTypes().subscribe(types => this.shipTypes = types);
  }

}
