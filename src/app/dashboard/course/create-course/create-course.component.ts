import { CourseService } from '../course.service';
import { CourseModel } from '../course.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  course: CourseModel = new CourseModel();

  constructor(private courseService: CourseService, private loggingService: LoggingService) { }

  ngOnInit() {
  }

  onCreate(){
    this.loggingService.log("Inside on create method");
    this.courseService.createCourse(this.course);
    this.loggingService.log("After Create");
    this.courseService.newItemAddedEvent.emit(true);
    this.loggingService.log("After emit");    
    this.course = new CourseModel();
    this.loggingService.log("Reset variable");
    
  }

  onUpdate(){
    
  }

}
