import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';

const routes: Routes = [

  { 
    path : '', 
    component: DashboardComponent,
    children: [
      { path : '', redirectTo: 'course', pathMatch: 'full'},
      { path : 'course', loadChildren: 'app/dashboard/course/course.module#CourseModule'},
      { path : 'user-registration', loadChildren: 'app/dashboard/user-registration/user-registration.module#UserRegistrationModule'},
      { path : 'current-batch', loadChildren: 'app/dashboard/current-batch/current-batch.module#CurrentBatchModule'}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent, DashboardHeaderComponent],
  exports: [RouterModule]
})
export class DashboardModule { }
