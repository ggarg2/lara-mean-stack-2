import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { DisplayCoursesComponent } from './display-courses/display-courses.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  declarations: [CourseComponent, CreateCourseComponent, DisplayCoursesComponent],
  exports: [CourseComponent]
})
export class CourseModule { }
