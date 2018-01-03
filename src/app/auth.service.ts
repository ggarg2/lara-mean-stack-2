import { Injectable } from '@angular/core';
import * as firebase from 'firebase'; 
import { fromPromise } from 'rxjs/observable/fromPromise';


@Injectable()
export class AuthService {

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

}
