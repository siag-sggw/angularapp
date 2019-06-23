import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { StockItem } from '../models/stock-item.model';
import { StockMomentInfo } from '../models/stock-moment-info';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  stockSymbols: string[] = [
    'amzn', 'msft', 'amd', 'ebay', 'intc', 'aapl'
  ];

  favoriteStockSymbols: string[] = [
    'amzn'
  ];

  private stockList: StockItem[];

  private favoritesStocks: StockItem[];

  constructor(private http: HttpClient) {
    this.stockList = [];
    this.favoritesStocks = [];
    this.getAllStock();
   }

  getStockBySymbol(symbol: string) {
    const url = 'https://cloud.iexapis.com/v1/stock/' + symbol + '/chart/1m/' + '?filter=date,open,high,low,close&token=pk_3becff15c5394811bbbdcf9bea4d5e63';
    return this.http.get(url);
  }

  getAllStock() {
    this.stockSymbols.forEach( symbol => {
      this.getStockBySymbol(symbol).subscribe( (el: StockMomentInfo[]) => {
        const stock: StockItem = new StockItem(symbol, el);
        this.stockList.push(stock);
        if (this.favoriteStockSymbols.includes(stock.symbol)) {
          this.favoritesStocks.push(stock)
        }
        console.log(stock);
      });
    });
  }

  getStockList(): Observable<StockItem[]> {
    return of(this.stockList);
  }

  getFavoriteStocksList(): Observable<StockItem[]> {
    return of(this.favoritesStocks);
  }

  setFavorite(stock: StockItem) {
    if (!this.favoritesStocks.includes(stock)) {
      this.favoritesStocks.push(stock)
    }
  }

  removeFavorite(symbol: StockItem) {
    this.favoritesStocks = this.favoritesStocks.filter(stock => stock.symbol != symbol.symbol)
  }
}
