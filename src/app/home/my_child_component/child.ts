import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-home-child',
  templateUrl: './child.html',
  styleUrls: ['./child.scss']
})
export class MyHomeChildComponent implements OnInit {

  @Input() mock_data:any; // this data come from parent component in home.component.html 
  constructor() { }

  ngOnInit(): void {

  }

}
