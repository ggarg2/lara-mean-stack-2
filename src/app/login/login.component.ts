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

  loginUserUsingObservable(){
    this.authService.loginObservable(this.emailId, this.password).subscribe(
      data => {
        console.log(data)
        alert("user is loggenin successfully") 

        let user: firebase.User = firebase.auth().currentUser;
        console.log("user is ")
        console.log(user)

        fromPromise(user.getIdToken()).subscribe(
          data => {
            console.log(this)
            this.authService.token = data;
            this.authService.userLoggedInEventEmitter.emit(true)
            localStorage.setItem("uid", data)
            console.log(this.authService)
            
          },
          error => {
            console.log("error while calling getIdToken")
            this.authService.userLoggedInEventEmitter.emit(false)
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
