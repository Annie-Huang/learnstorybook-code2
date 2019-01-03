import { NgModule } from '@angular/core';

import { TaskComponent } from './task.component';
import {CommonModule} from '@angular/common';
import {TaskListComponent} from './task-list.component';

@NgModule({
  imports: [CommonModule],
  exports: [TaskComponent, TaskListComponent],
  declarations: [TaskComponent, TaskListComponent],
  providers: [],
})
export class TaskModule {}
