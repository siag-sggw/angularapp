import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  @Input() date : String;
  @Input() price : number;
  @Input() growthTrend : boolean;
  constructor() {}

  ngOnInit() {
  }
}