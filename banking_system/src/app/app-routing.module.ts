import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BalanceCheckComponent } from './balance-check/balance-check.component';
import { CalculateSessionComponent } from './calculate-session/calculate-session.component';
import { DepositCalculatorComponent } from './deposit-calculator/deposit-calculator.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { PaymentComponent } from './payment/payment.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'calculate-session',
    component: CalculateSessionComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'balance-check',
    component: BalanceCheckComponent
  },
  {
    path: 'loan-calculator',
    component: LoanCalculatorComponent
  },
  {
    path: 'deposit-calculator',
    component: DepositCalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
