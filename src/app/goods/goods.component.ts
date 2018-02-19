import { Component, OnInit } from '@angular/core';

import { Good } from '../good';
import { GoodService } from '../services/good.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  goods: Good[];

  constructor(private goodService: GoodService) { }

  ngOnInit() {
    this.goodService.getGoods().subscribe(goods => this.goods = goods);
  }

}
