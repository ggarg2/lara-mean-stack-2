import { EventEmitter } from '@angular/core';
import { CourseModel } from "./course.model";

export class CourseService {

  courseList: CourseModel[] = [];
  
  newItemAddedEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() {

   }

  createCourse(course){
    console.log("new Course object is ")
    console.log(course)
    this.courseList.push(course)
    //this.newItemAddedEvent.emit(true)
  }

  deleteCourse(){

  }

  getAllCourse(){
    return this.courseList;
  }

}
