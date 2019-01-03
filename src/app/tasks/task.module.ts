import { NgModule } from '@angular/core';

import { TaskComponent } from './task.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [TaskComponent],
  declarations: [TaskComponent],
  providers: [],
})
export class TaskModule {}
