import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'front';
  public selected_page: any;

  constructor(router: Router) {
    router.events.subscribe(event=>{
      if (event instanceof  NavigationStart) this.selected_page=event.url;
    })
  
  }
  ngOnInit(): void {

  }

}
