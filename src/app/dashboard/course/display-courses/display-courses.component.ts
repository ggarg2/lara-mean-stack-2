import { CourseService } from '../course.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CourseModel } from '../course.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-display-courses',
  templateUrl: './display-courses.component.html',
  styleUrls: ['./display-courses.component.css']
})
export class DisplayCoursesComponent implements OnInit {

  displayedColumns = ['id', 'name', 'faculty', 'duration', 'operation'];
  dataSource = new MatTableDataSource<CourseModel>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private courseService: CourseService) {
    //this.dataSource = new MatTableDataSource<CourseModel>(courseService.getAllCourse());

    this.courseService.newItemAddedEvent.subscribe(
      data => {
        if(data){
          this.getAllCourse();
        }
      }
    )
  }

  ngOnInit() {
    this.getAllCourse()
  }

  getAllCourse(){
    //this.dataSource = new MatTableDataSource<CourseModel>(this.courseService.getAllCourse());
  
    this.courseService.getAllCourse().subscribe(
      data =>{
        console.log(data)
        //this.dataSource = new MatTableDataSource<CourseModel>(data);
      }, error =>{

      }
    );
  }

  viewCourse(element){
    this.courseService.viewCourseEvent.emit(element)
  }

  editCourse(element){
    this.courseService.editCourseEvent.emit(element)    
  }

}
