import { Component, OnInit } from '@angular/core';
import { CourseModel } from './course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseList: CourseModel[] = [];  

  constructor() { }

  ngOnInit() {
  }

  onCreate(value){
    this.courseList.push(value);
    console.log(this.courseList);
  }

}
