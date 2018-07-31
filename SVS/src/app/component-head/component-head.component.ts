import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-head',
  templateUrl: './component-head.component.html',
  styleUrls: ['./component-head.component.css']
})
export class ComponentHeadComponent implements OnInit {
  
  constructor() { let isCollapsed = false; }

  ngOnInit() {
  }

}
