import { AuthService } from './auth.service';
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
  
  
  constructor(private authService: AuthService){

    this.authService.setToken();

    firebase.initializeApp({
      apiKey: environment.apiKey,
      authDomain: environment.authDomain
    })

    

  }

  ngOnInit(): void {

    console.log(environment);

  }



}
