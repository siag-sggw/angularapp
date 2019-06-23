import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prediction } from '../models/prediction.model';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {


  constructor(private http: HttpClient) {}

  getPrediction(symbol: string) {
    const url = "http://207.154.254.118:8000/api/v1/stock_price?stock=" + symbol
    return this.http.get(url)
  }
}
