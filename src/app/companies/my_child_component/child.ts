import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-company-child',
  templateUrl: './child.html',
  styleUrls: ['./child.scss']
})
export class MyCompanyChildComponent implements OnInit {

  @Input() data:any; // this data come from parent component in home.component.html 
  constructor() { }

  ngOnInit(): void {

  }

}
