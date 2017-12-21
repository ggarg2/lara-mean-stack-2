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

  displayedColumns = ['id', 'name', 'faculty', 'duration'];
  dataSource = new MatTableDataSource<CourseModel>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private courseService: CourseService) {
    this.dataSource = new MatTableDataSource<CourseModel>(courseService.getAllCourse());

    this.courseService.newItemAddedEvent.subscribe(
      data => {
        if(data){
          this.getAllCourse();
        }
      }
    )
  }

  ngOnInit() {
  }

  getAllCourse(){
    let coursesList = this.courseService.getAllCourse();
    this.dataSource = new MatTableDataSource<CourseModel>(coursesList);
  }

}
