import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  
  // onAdd(form:NgForm) { //btn pressed
  //   this.formSubmit.emit(form.value)
  //   form.reset()
    
  // }

}
