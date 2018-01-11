import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signupForm: FormGroup;

  existingUserNames: string[] = ['Lara', 'Java'];
  
  constructor() {

    this.signupForm = new FormGroup({

      'userDataForm': new FormGroup({
        'username' : new FormControl(null, [Validators.required, this.validateUserNames.bind(this)]),
        'email': new FormControl("a@a.com", [Validators.required, 
          Validators.email], [this.validateEmailId])
      }),
       'address': new FormControl(null),
       'fields': new FormArray([])
    })

   }

   addField(){
     (<FormArray>this.signupForm.get("fields")).push(new FormControl())
   }

   submitForm(){
     console.log("Test")
     console.log(this.signupForm)
   }

  ngOnInit() {

  }



  validateUserNames(control: FormControl) : {[s: string]: boolean}{

    if(this.existingUserNames.indexOf(control.value) != -1 ){
      return {'nameExist': true}
    }
    return null;
  }

  validateEmailId(control: FormControl): Observable<any> | Promise<any>{
    const emailPromise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(
          () => {

            if(control.value == "b@b.com"){
              resolve({'validEmail': true});
            }else{
              resolve(null);
            }
          }, 5000
        )
      }
    )

    return emailPromise;
  }

  reset(){

    this.signupForm.reset();

  }
}
