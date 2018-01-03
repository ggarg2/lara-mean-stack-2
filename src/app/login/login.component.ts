import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 
import { fromPromise } from 'rxjs/observable/fromPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailId: string;
  password: string;

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  loginUser(){
    let _self = this;

    this.authService.login(this.emailId, this.password).then(function(response){
      console.log(response)
      alert("user is logged in successfully") 
      _self.route.navigateByUrl("/dashboard/course")
    }).catch(function(error){
       // Handle Errors here.
       let errorCode = error.code;
       let errorMessage = error.message;
       console.log("error code is "+ errorCode)
       console.log("error message is "+ errorMessage)
       alert("error: "+errorMessage)
    })
  }


  loginUserUsingObservable(){
    this.authService.loginObservable(this.emailId, this.password).subscribe(
      data => {
        console.log(data)
        alert("user is loggenin successfully") 

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

        this.route.navigateByUrl("/dashboard/course")

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
