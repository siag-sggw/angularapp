import { Component, OnInit, Input } from '@angular/core';
import { StockItem } from 'src/app/models/stock-item.model';

@Component({
  selector: 'app-stock-item-detail',
  templateUrl: './stock-item-detail.component.html',
  styleUrls: ['./stock-item-detail.component.scss']
})
export class StockItemDetailComponent implements OnInit {
  private _stockItem: StockItem;
  @Input() set stockItem(value: StockItem) {
    this._stockItem = value;
    this.setChartData();
  }

  get stockItem(): StockItem {
    return this._stockItem;
  }

  dataSource: Object;
  chartConfig: Object;
  stockData;

  constructor() {
    this.stockData = [];
   }

  ngOnInit() {
    this.chartConfig = {
      width: '100%',
      height: '400',
      type: 'candlestick',
      dataFormat: 'json'
    };

    this.setChartData();
  }

  private setChartData() {
    let x = 1;
    this.stockData = [];
    this.stockItem.data.forEach( el => {
      let temp = {
        "open": el.open.toString(),
        "high": el.high.toString(),
        "low": el.low.toString(),
        "close": el.close.toString(),
        "x": x++
      };
      this.stockData.push(temp);
    });

    let symbol = this.stockItem.symbol;

    this.dataSource = {
      "chart": {
        "caption": symbol.toUpperCase(),
        "subcaption": "subcaption",
        "numberprefix": "$",
        "pyaxisname": "Price (USD)",
        "theme": "fusion",
        "showvolumechart": "0",
      },
      "dataset": [
        {
          "data": this.stockData
        }
      ]
    }
  }

}
