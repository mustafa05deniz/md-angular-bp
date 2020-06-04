import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private crud_service:CrudService) { }

  async get_data(){
    return new Promise((resolve,reject)=>{
      this.crud_service.get("companies").pipe().subscribe(result=>{
        resolve(result);
      })
    })
  }
}
