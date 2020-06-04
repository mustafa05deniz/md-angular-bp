import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private crud_service:CrudService) { }


  async run_task_1(){
    return new Promise((resolve,reject)=>{
      this.crud_service.get("tasks/_example_task_1").pipe().subscribe(result=>{
        resolve(result);
      })
    })
  }
  async primitive_task_1(){
    return new Promise((resolve,reject)=>{
      this.crud_service.get("tasks/_primitive_task_1").pipe().subscribe(result=>{
        resolve(result);
      })
    })
  }
}
