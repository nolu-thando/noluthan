import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  amount: any;

  constructor() { 
  console.log('BudgetService Works');
   }

   getIncome() {
    let income = JSON.parse(localStorage.getItem('income'));
    return income;
  }
  getExpenses() {
    let expenses = JSON.parse(localStorage.getItem('expenses'));
    return expenses;
  }
  addIncome(newIncome) {
  
    let income = JSON.parse(localStorage.getItem('income'));
    income.push(newIncome);
    localStorage.setItem('income', JSON.stringify(income));
 }
 addExpenses(newExpenses) {
  let expenses = JSON.parse(localStorage.getItem('expenses'));
  expenses.push(newExpenses);
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

}
