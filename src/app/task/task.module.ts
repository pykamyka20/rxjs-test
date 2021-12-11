import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TaskComponent } from './components/task/task.component';
import { TaskRoutingModule } from './task-routing.module';


@NgModule({
  imports: [
    TaskRoutingModule
  ],
  declarations: [
    TaskComponent
  ],
})
export class TaskModule { }
