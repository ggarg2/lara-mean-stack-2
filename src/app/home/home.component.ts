import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private activatedRoutes: ActivatedRoute) { }

  ngOnInit() {

    let cityId = this.activatedRoutes.snapshot.params['cityId'];
    console.log("city id is "+cityId);
    let localityId = this.activatedRoutes.snapshot.params['localityId'];
    console.log("locality id is "+localityId)

    let name = this.activatedRoutes.snapshot.queryParams['name'];
    console.log("name is "+name);

    this.activatedRoutes.params.subscribe(
      (params: Params)=>{
        console.log(params)
      }
    )

    this.activatedRoutes.queryParams.subscribe(
      (params: Params)=>{
        console.log(params)
      }
    )

  }


    public ngOnDestroy(): void {
       console.log("destroy the component");
      
    }
}
