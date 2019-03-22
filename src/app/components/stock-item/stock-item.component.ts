import { Component, OnInit, Input } from '@angular/core';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';
import { StockItem } from 'src/app/models/stock-item.model';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {
  @Input() stockItem: StockItem;

  constructor() { }

  ngOnInit() {
  }

}
