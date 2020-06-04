import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  private subscription: Subscription;
  public message: string;

  public yeni_baslangic_tarihi = 0;
  return_infos=[];
  constructor(private task_service:TaskService) { 


  }


  ngOnInit(): void {
    
  }

  async task_1_run(){
    this.task_service.run_task_1().then(result=>{
      console.log(result);
     
    })
  }

 

}
