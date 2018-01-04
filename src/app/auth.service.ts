import { EventEmitter, Injectable } from '@angular/core';
import * as firebase from 'firebase'; 
import { fromPromise } from 'rxjs/observable/fromPromise';


@Injectable()
export class AuthService {

   userLoggedInEventEmitter: EventEmitter<boolean> = new EventEmitter();

  token: string = undefined;

  constructor() { }

  signup(emailId, password){
    console.log("emailId is "+ emailId + " password is "+ password)

    return firebase.auth().createUserWithEmailAndPassword(emailId, password);
  }

  signupUsingObservable(emailId, password){
    console.log("emailId is "+ emailId + " password is "+ password)

    return fromPromise(firebase.auth().createUserWithEmailAndPassword(emailId, password));
  }

  login(emailId, password){
    console.log("emailId is "+ emailId + " password is "+ password)

    return firebase.auth().signInWithEmailAndPassword(emailId, password);
  }

  loginObservable(emailId, password){
    console.log("emailId is "+ emailId + " password is "+ password)

    return fromPromise(firebase.auth().signInWithEmailAndPassword(emailId, password));
  }

  isAuthenticated(){
    console.log("isAuthenticated")
    console.log(this.token != undefined)

    return this.token != undefined;
  }

  logout(){
    firebase.auth().signOut();
    localStorage.removeItem("uid");
  }

  setToken(){
     this.token  = localStorage.getItem("uid")

    //let user: firebase.User = firebase.auth().currentUser;

    // firebase.auth().onAuthStateChanged(function(user: firebase.User){
    //   console.log("user is ")
    //   console.log(user)
    //   fromPromise(user.getIdToken()).subscribe(
    //     data=>{
    //       console.log(data)
    //       this.token = data;
    //     },
    //     error => {
    //       console.log("error while setting the token")
    //     }
    //   )
    // })
  }

}
