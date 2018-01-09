import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signupForm: FormGroup;

  constructor() {

    this.signupForm = new FormGroup({

      'userDataForm': new FormGroup({
        'username' : new FormControl(null, [Validators.required]),
        'email': new FormControl("a@a.com", [Validators.required, 
          Validators.email])
      }),
       'address': new FormControl(null)
    })

   }

   submitForm(){
     console.log("Test")
     console.log(this.signupForm)
   }

  ngOnInit() {

  }
}
