import { CourseService } from '../course.service';
import { CourseModel } from '../course.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  course: CourseModel = new CourseModel();

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  onCreate(){
    this.courseService.createCourse(this.course);
    this.courseService.newItemAddedEvent.emit(true);
    this.course = new CourseModel();
  }

  onUpdate(){
    
  }

}
