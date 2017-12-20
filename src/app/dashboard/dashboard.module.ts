import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CourseModule } from './course/course.module';
import { CourseComponent } from './course/course.component';
import { UserRegistrationModule } from './user-registration/user-registration.module';
import { CurrentBatchModule } from './current-batch/current-batch.module';
import {MatListModule} from '@angular/material/list';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { CurrentBatchComponent } from './current-batch/current-batch.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';

const routes: Routes = [

  { 
    path : 'dashboard', 
    component: DashboardComponent,
    children: [
      { path : '', redirectTo: 'course', pathMatch: 'full'},
      { path : 'course', component: CourseComponent},
      { path : 'user-registration', component: UserRegistrationComponent},
      { path : 'current-batch', component: CurrentBatchComponent}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    CourseModule,
    UserRegistrationModule,
    CurrentBatchModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent, DashboardHeaderComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
