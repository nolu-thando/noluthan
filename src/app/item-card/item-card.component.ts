import { Component, OnInit,Output, Input,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
// @Input() isIncome:boolean = false
//@Input() item
@Output() xButtonClick:EventEmitter<any> = new EventEmitter<any>() //any means there is no  data to send
@Output() cardClick:EventEmitter<any> = new EventEmitter<any>() //any means there is no  data to send

constructor() { }

ngOnInit(): void {
}

onXButtonClick() {
  this.xButtonClick.emit()    
}

onCardClick(){
  this.cardClick.emit()
}

}
