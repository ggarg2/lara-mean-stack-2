import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBoxComponent } from './alert-box/alert-box.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  declarations: [AlertBoxComponent],
  exports: [AlertBoxComponent]
})
export class UtilModule { }
