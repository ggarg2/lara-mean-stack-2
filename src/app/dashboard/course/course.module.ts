import { RouterModule, Routes } from '@angular/router';
import { UtilModule } from '../../util/util.module';
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
import { LoggingService } from './logging.service';

const routes: Routes = [
  { path: '', component: CourseComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTableModule,
    UtilModule
  ],
  declarations: [CourseComponent, CreateCourseComponent, DisplayCoursesComponent],
  exports: [RouterModule],
  providers: [CourseService, LoggingService]
})
export class CourseModule { }
