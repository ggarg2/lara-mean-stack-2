import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onError(msg, action){
    this.snackBar.open(msg, action, {
      duration: 5000,
    });
  }

  onSuccess(msg, action){
    this.snackBar.open(msg, action, {
      duration: 5000,
    });
  }

}
