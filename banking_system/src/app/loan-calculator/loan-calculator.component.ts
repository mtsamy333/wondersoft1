import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css']
})
export class LoanCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  total: any = "0";
  emi: any = "0";
  calculateValue(pAmount: any, duration: any, loanType: any) {
    var mytotal: any = 0;
    var rateOfInterest: any = loanType / (12 * 100);
    mytotal = pAmount * rateOfInterest * Math.pow(1 + rateOfInterest, duration) / (Math.pow(1 + rateOfInterest, duration) - 1);
    this.total = Math.round(mytotal * duration);
    this.emi = Math.round(mytotal);
  }
}
