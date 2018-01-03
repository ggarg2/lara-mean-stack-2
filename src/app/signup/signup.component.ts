import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 
import { fromPromise } from 'rxjs/observable/fromPromise';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  emailId: string;
  password: string;

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  registerUser(){
    this.authService.signup(this.emailId, this.password).then(function(response){
      console.log(response)
      alert("user is created successfully")      
    }).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log("error code is "+ errorCode)
      console.log("error message is "+ errorMessage)
      alert("error: "+errorMessage)
      // ...
    });
  }

  registerUserUsingObservable(){
    this.authService.signupUsingObservable(this.emailId, this.password).subscribe(
      data => {
        console.log(data)
        alert("user is created successfully") 

        let user: firebase.User = firebase.auth().currentUser;
        console.log("user is ")
        console.log(user)

        let _self = this;

        user.getIdToken().then(function(response: string){
          console.log(response)
          console.log(_self)
          console.log(_self.authService)
          _self.authService.token = response;
        })

        fromPromise(user.getIdToken()).subscribe(
          data => {
            console.log(this)
            console.log(this.authService)
            this.authService.token = data;
          },
          error => {
            console.log("error while calling getIdToken")
          }
        )

      },
      error => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log("error code is "+ errorCode)
        console.log("error message is "+ errorMessage)
        alert("error: "+errorMessage)
      }
    )
  
  }

}
