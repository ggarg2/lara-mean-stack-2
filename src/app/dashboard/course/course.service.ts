import { AuthService } from '../../auth.service';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { CourseModel } from "./course.model";
import { LoggingService } from './logging.service';

@Injectable()
export class CourseService {

  courseList: CourseModel[] = [];
  
  newItemAddedEvent: EventEmitter<boolean> = new EventEmitter();

  viewCourseEvent: EventEmitter<CourseModel> = new EventEmitter();
  editCourseEvent: EventEmitter<CourseModel> = new EventEmitter();

  constructor(private loggingService: LoggingService, private httpClient: HttpClient, private authService: AuthService) {
    
   }

  createCourse(course) : Observable<any>{
    this.loggingService.log("new Course object is ")
    this.loggingService.log(course)
    return this.httpClient.post("https://my-proj12.firebaseio.com/courses.json", course);
    //this.newItemAddedEvent.emit(true)
  }

  deleteCourse(){

  }

  getAllCourse(): Observable<any>{
    return this.httpClient.get("https://my-proj12.firebaseio.com/courses.json");
  }

}
