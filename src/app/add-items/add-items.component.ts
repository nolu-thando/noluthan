import { Component, OnInit } from '@angular/core';
import { CalculatorService} from './../calculator.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent implements OnInit {

  
  constructor(private calculatorService: CalculatorService){}

  ngOnInit() {
  }
  add(){
    this.calculatorService.sendClickEvent();
    }
 
}
