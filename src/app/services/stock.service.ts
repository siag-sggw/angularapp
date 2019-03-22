import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of, Observable } from 'rxjs';
import { StockItem } from '../models/stock-item.model';
import { StockMomentInfo } from '../models/stock-moment-info';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  stockSymbols: string[] = [
    'aapl', 'msft', 'googl'
  ];

  private stockList: StockItem[];
  

  constructor(private http: HttpClient) {
    this.stockList = [];
    this.getAllStock();
   }

  getStockBySymbol(symbol: string) {
    let url = 'https://api.iextrading.com/1.0/stock/'+ symbol +'/chart?filter=date,high,low,open,close';
    return this.http.get(url);
  }

  getAllStock() {
    this.stockSymbols.forEach( symbol => {
      this.getStockBySymbol(symbol).subscribe( (el: StockMomentInfo[]) => {
        let stock: StockItem = new StockItem(symbol, el);
        this.stockList.push(stock);
        console.log(stock);
      });
    });
  }

  getStockList(): Observable<StockItem[]> {
    return of(this.stockList);
  }
}
