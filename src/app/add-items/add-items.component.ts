import { Component} from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { Models } from "../Models.1";

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})

export class AddItemsComponent {
  income: Models;
  expense: Models;
  description: String;
  dateAdded:Date;
  amount: number;
  personList: Array<any> = [];
  editField: string;
  awaitingPersonList: Array<any> = [];



  constructor( private calculatorService: CalculatorService ){}  

  ngOnInit() { }
 

  
  

  updateList(income: number, expense: number, event: any) {
    const editField = event.target.textContent;
    this.personList[income][expense] = editField;
  }

  remove(id: any) {
    this.personList.push(this.personList[id]);
    this.personList.splice(id, 1);
   // localStorage.removeItem("id");
  }

  add() {
    this.personList.push({ income: this.income, expense: this.expense, description: this.description, dateAdded: this.dateAdded});
    if (this.personList.length > 0) {
      const person = this.personList[0];
      this.personList.push(person);
      this.personList.splice(0, 1);
      localStorage.setItem('personList',JSON.stringify(this.personList))
      console.log(this.personList);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
 
  }


