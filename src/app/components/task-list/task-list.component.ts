import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateService } from './../../share/date.service';
import * as moment from 'moment';
import {Task, TaskService } from 'src/app/share/task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  date:moment.Moment = moment();
  public form: FormGroup; 
  tasks: Task[] = [];

  constructor(
    private dateService:DateService,
    public taskService:TaskService
    
    ) { 
    this.form = new FormGroup({
      taskText: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.dateService.date.subscribe(date=>{
      this.date = date;
      this.taskService.load(date).subscribe(res=>{
        this.tasks = res;
        console.log(this.tasks)
      })
    }) 
    console.log(this.date)
  }

  addTask():void{
    const title:string = this.form.value.taskText;
    console.log(title)
    const task: Task = {
      title,
      date: this.dateService.date.value.format('DD-MM-YYYY')
    }

    this.taskService.create(task).subscribe(task => {
      this.tasks.push(task)
      this.form.reset()
    }, err => console.error(err))
  }

  remove(task:Task){
    this.taskService.remove(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    })
  }

}
