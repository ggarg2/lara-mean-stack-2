import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserRegistrationComponent],
  exports: [UserRegistrationComponent]
})
export class UserRegistrationModule { }
