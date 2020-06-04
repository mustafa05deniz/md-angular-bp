import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    title = 'header';
    public selected_page: any;
  
    constructor(router: Router) {
      router.events.subscribe(event=>{
        if (event instanceof  NavigationStart) this.selected_page=event.url;
      })
    
    }
    ngOnInit(): void {
  
    }
  
}
