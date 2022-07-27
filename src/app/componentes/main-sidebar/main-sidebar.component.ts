import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent implements OnInit {

  activeOptions = [true, false, false, false, false];

  constructor() { }

  ngOnInit(): void {
  }

  getActiveOption(index : number){
    this.activeOptions.fill(false);
    this.activeOptions[index]=true;
  }

}
