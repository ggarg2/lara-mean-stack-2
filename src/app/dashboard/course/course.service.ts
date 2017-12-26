import { EventEmitter, Injectable } from '@angular/core';
import { CourseModel } from "./course.model";
import { LoggingService } from './logging.service';

@Injectable()
export class CourseService {

  courseList: CourseModel[] = [];
  
  newItemAddedEvent: EventEmitter<boolean> = new EventEmitter();

  viewCourseEvent: EventEmitter<CourseModel> = new EventEmitter();
  editCourseEvent: EventEmitter<CourseModel> = new EventEmitter();

  constructor(private loggingService: LoggingService) {
    
   }

  createCourse(course){
    this.loggingService.log("new Course object is ")
    this.loggingService.log(course)
    this.courseList.push(course)
    //this.newItemAddedEvent.emit(true)
  }

  deleteCourse(){

  }

  getAllCourse(){
    return this.courseList;
  }

}
