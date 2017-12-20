import { CourseModel } from '../course.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  course: CourseModel = new CourseModel();

  @Output("createCourseEvent") createCourseEvent: EventEmitter<CourseModel> 
                                                                      = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCreate(){
    this.createCourseEvent.emit(this.course);
    this.course = new CourseModel();
  }

  onUpdate(){
    
  }

}
