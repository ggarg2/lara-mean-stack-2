import { AlertBoxComponent } from '../../../util/alert-box/alert-box.component';
import { CourseService } from '../course.service';
import { CourseModel } from '../course.model';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  course: CourseModel = new CourseModel();

  isView: boolean = false;
  isEdit: boolean = false;
  showForm: boolean = false;

  @ViewChild(AlertBoxComponent) alertBox: AlertBoxComponent;

  constructor(private courseService: CourseService, 
    private loggingService: LoggingService) {
      this.courseService.viewCourseEvent.subscribe(
        data=>{
          console.log(data)
          this.course = data;
          this.isView = true;
          this.isEdit = false;
          this.showForm = true;
          this.alertBox.onSuccess("Listening to View Event", "Done")
        },
        error =>{
          console.log(error)
        }
      )

      this.courseService.editCourseEvent.subscribe(
        data=>{
          console.log(data)
          this.course = data;
          this.isView = false;
          this.isEdit = true;
          this.showForm = true;
          this.alertBox.onSuccess("Listening to Edit Event", "Done")
        },
        error =>{
          console.log(error)
        }
      )

     }

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
    this.alertBox.onSuccess("Course is created Successfully", "Done")
  }

  onUpdate(){
    
  }

  toggleForm(){
    this.showForm = !this.showForm;
  }

  cancel(){
    this.course = new CourseModel();
    this.showForm = false;
  }

}
