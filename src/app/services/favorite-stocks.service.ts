import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteStocksService {

  favoritesStocks: string[] = [
    'amzn'
  ];

  constructor(private http: HttpClient) {

   }

  getFavoriteStocksList(): Observable<String[]> {
    return of(this.favoritesStocks);
  }

  setFavorite(symbol: string) {
    if (!this.favoritesStocks.includes(symbol)) {
      this.favoritesStocks.push(symbol)
    }
  }

  removeFavorite(symbol: string) {
    this.favoritesStocks = this.favoritesStocks.filter(stock => stock != symbol)
  }
}
