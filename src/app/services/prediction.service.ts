import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prediction } from '../models/prediction.model';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  predictions = { 'amzn': 1853.10, 'msft': 125.82, 'amd': 28.22, 'ebay': 39.57, 'intc': 48.58, 'aapl': 194.60 }

  constructor(private http: HttpClient) {}

  getPrediction(symbol: string) {
    const url = "http://207.154.254.118:8000/api/v1/stock_price?stock=" + symbol
    return this.http.get(url)
  }

  getPrediction2(symbol: string) {
    return new Prediction(this.predictions[symbol])
  }
}
