import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentBatchComponent } from './current-batch.component';

const routes: Routes = [
  {path: '', component: CurrentBatchComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CurrentBatchComponent],
  exports: [RouterModule]
})
export class CurrentBatchModule { }
