import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as firebase from 'firebase';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  
  ngOnInit(): void {
   
    console.log(environment);

    firebase.initializeApp({
      apiKey: environment.apiKey,
      authDomain: environment.authDomain
    })

  }



}
