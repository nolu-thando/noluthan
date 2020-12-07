import { Component, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent {
  @Output() cardClick:EventEmitter<any> = new EventEmitter<any>() //any means there is no  data to send

  @Input() item:'';
  isNewItem:boolean 
//Items for the local storage

  constructor(){}
  ngOnInit(): void {
    if (this.item) {
      //if item has a value (existing item)
      this.isNewItem = false
    } else {
      this.isNewItem = true
      //this.item = new ('', null)
    }
  }

  editField: string;
  personList: Array<any> = [];

  awaitingPersonList: Array<any> = [];

  updateList(income: number, expense: number, event: any) {
    const editField = event.target.textContent;
    this.personList[income][expense] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);
      localStorage.setItem('personList',JSON.stringify(this.personList))
      console.log(this.personList);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
 
  }


  