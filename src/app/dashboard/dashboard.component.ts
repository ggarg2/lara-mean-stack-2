import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  headerName: string = 'Mean Stack Dashboard';

  constructor() { }

  ngOnInit() {
  }

  setHeader(value){
    this.headerName = value;
  }

}
