import { Component, OnInit, Input } from '@angular/core';
import { StockItem } from 'src/app/models/stock-item.model';
import { StockService } from 'src/app/services/stock.service';

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

  favoriteStocks: StockItem[] = [];

  dataSource: Object;
  chartConfig: Object;
  stockData;
  stockLabels;

  constructor(private stockService: StockService) {
    this.stockData = [];
    this.stockService.getFavoriteStocksList().subscribe( arr => this.favoriteStocks = arr )
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

  isFavorite(stock: StockItem): boolean {
    return this.favoriteStocks.includes(stock)
  }

  addFavoriteClick(stock: StockItem) {
    this.stockService.setFavorite(stock)
  }

  removeFavoriteClick(stock: StockItem) {
    this.stockService.removeFavorite(stock)
    this.stockService.getFavoriteStocksList().subscribe( arr => this.favoriteStocks = arr )
  }


  private setChartData() {
    let x = 1;
    this.stockData = [];
    this.stockLabels = [];
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

    x = 1;
    this.stockItem.data.forEach( el => {
      let tempLabel = {
        "label": el.date.toLocaleDateString().substr(4,1) == '.' ? el.date.toLocaleDateString().substr(0,4) : el.date.toLocaleDateString().substr(0,5),
        "x": x++
      };
      this.stockLabels.push(tempLabel);
    });

    let symbol = this.stockItem.symbol;

    this.dataSource = {
      "chart": {
        "caption": symbol.toUpperCase(),
        "subcaption": "Pricing details daily",
        "numberprefix": "$",
        "pyaxisname": "Price (USD)",
        "theme": "fusion",
        "showvolumechart": "0",
      },
      "categories": [{
        "category": this.stockLabels
      }
    ],
      "dataset": [
        {
          "data": this.stockData
        }
      ]
    }
  }

}
