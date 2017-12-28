import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '' , component: UserRegistrationComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserRegistrationComponent],
  exports: [RouterModule]
})
export class UserRegistrationModule { }
