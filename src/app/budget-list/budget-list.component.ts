import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalculatorService} from './../calculator.service'

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent {
  clickEventsubscription:Subscription;
    
  constructor(private calculatorService: CalculatorService){
    this.clickEventsubscription=    this.calculatorService.getClickEvent().subscribe(()=>{
     
      })
      

  }
  
  editField: string;
  personList: Array<any> = [
    { id: 1, income: 'Aurelia Vega', expense: 30 },
    { id: 2, income: 'Guerra Cortez', expense: 45 },
    { id: 3, income: 'Guadalupe House', expense: 26 },
    { id: 4, income: 'Aurelia Vega', expense: 30 },
    { id: 5, income: 'Elisa Gallagher',expense: 31 },
  ];

  awaitingPersonList: Array<any> = [
    { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
    { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
    { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' },
    { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
    { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  delete(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  
  }

  
 


  

 



