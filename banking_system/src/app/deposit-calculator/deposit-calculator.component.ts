import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposit-calculator',
  templateUrl: './deposit-calculator.component.html',
  styleUrls: ['./deposit-calculator.component.css']
})
export class DepositCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  total1: any = "0";
  // total2: any = "0";
  calculateValue(iAmount: any, duration: any, interest: any) {
    var mytotal: any = 0;
    this.total1 = (iAmount * interest * duration / 100);
    // this.total2 = Math.round(iAmount*((1 + interest/100)*duration - 1));
     
  }
}
