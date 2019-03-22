import { Component, OnInit, Input } from '@angular/core';
import { StockItem } from 'src/app/models/stock-item.model';

@Component({
  selector: 'app-stock-item-detail',
  templateUrl: './stock-item-detail.component.html',
  styleUrls: ['./stock-item-detail.component.scss']
})
export class StockItemDetailComponent implements OnInit {
  @Input() stockItem: StockItem;

  constructor() { }

  ngOnInit() {
  }

}
