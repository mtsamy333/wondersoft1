import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PaymentComponent } from './payment/payment.component';
import { AccountComponent } from './account/account.component';
import { BalanceCheckComponent } from './balance-check/balance-check.component';
import { CalculateSessionComponent } from './calculate-session/calculate-session.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { DepositCalculatorComponent } from './deposit-calculator/deposit-calculator.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PaymentComponent,
    AccountComponent,
    BalanceCheckComponent,
    CalculateSessionComponent,
    LoanCalculatorComponent,
    DepositCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
