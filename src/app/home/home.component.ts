import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mock_data: any; // parent component datas

  constructor(public mock_service :MockService) { }

  ngOnInit(): void {
    this.mock_service.get_data().then(result=>{
      this.mock_data = result;
    }).catch(err=>{
      alert(err);
    })
  }

}
