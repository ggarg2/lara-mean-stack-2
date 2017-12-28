import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceNotFoundComponent } from './resource-not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResourceNotFoundComponent],
  exports: [ResourceNotFoundComponent]
})
export class ResourceNotFoundModule { }
