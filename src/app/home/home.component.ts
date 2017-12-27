import { Observable, Observer, Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberSubscripion: Subscription;

  constructor() { }

  ngOnInit() {

    const myNumberObservable = Observable.interval(1000);

    const myObservable: Observable<string> = Observable.create(
      (observer: Observer<string>)=>{

        setTimeout(() => {
          observer.next("1st Next Event 2000")
        }, 2000);

        setTimeout(() => {
          observer.next("2nd Next Event 1000")
        }, 1000);

        setTimeout(() => {
          observer.error("1st Error Event 5000")
        }, 5000);

        setTimeout(() => {
          observer.complete()
        }, 7000);

        setTimeout(() => {
          observer.next("3rd Next Event 8000")
        }, 8000);

    })


    myObservable.subscribe(
      data=> {
        console.log("Data Handler "+data)
      },
      error=> {
        console.log("Error Handler "+error)
      },
      ()=> {
        console.log("It is completed")
      }
    )



    console.log("before subscriber")

   this.numberSubscripion = myNumberObservable.subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error)
      },
      ()=> {console.log("observable is done")}

    )

    console.log("after subscriber")

    // alert("server is over loaded...please wait for sometime");

  }


    public ngOnDestroy(): void {
       console.log("destroy the component");
       this.numberSubscripion.unsubscribe();
    }
}
