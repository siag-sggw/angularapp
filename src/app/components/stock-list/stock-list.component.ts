import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { StockItem } from 'src/app/models/stock-item.model';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  stockList: StockItem[];
  favouriteList: StockItem[]
  selectedStock: StockItem;

  constructor(private stockService: StockService) {
  }

  ngOnInit() { 
    this.selectedStock = null;
    this.stockList = [];
    this.favouriteList = [];
    this.stockService.getStockList().subscribe( arr => this.stockList = arr);
    this.stockService.getFavouriteList().subscribe( arr => this.favouriteList = arr);
  }

  onStockItemClick(stock: StockItem) {
    console.log(stock); 
    this.selectedStock = stock; 
  }

}
