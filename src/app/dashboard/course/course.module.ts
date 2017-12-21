import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { DisplayCoursesComponent } from './display-courses/display-courses.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { CourseService } from './course.service';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ],
  declarations: [CourseComponent, CreateCourseComponent, DisplayCoursesComponent],
  exports: [CourseComponent],
  providers: [CourseService]
})
export class CourseModule { }
