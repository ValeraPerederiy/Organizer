import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DateService } from './../../share/date.service';

@Component({
  selector: 'app-select-month',
  templateUrl: './select-month.component.html',
  styleUrls: ['./select-month.component.scss']
})
export class SelectMonthComponent implements OnInit {

  public date:moment.Moment = moment()

  constructor(public dateService:DateService) {
      
   }

  ngOnInit(): void {
    this.dateService.date.subscribe(date=>{
      this.date = date
    })
  }

  public goToMonth(num:number):void{
    this.dateService.changeMonth(num)
  } 

}
