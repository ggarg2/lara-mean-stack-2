import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentBatchComponent } from './current-batch.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CurrentBatchComponent],
  exports: [CurrentBatchComponent]
})
export class CurrentBatchModule { }
