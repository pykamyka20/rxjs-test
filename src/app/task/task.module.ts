import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './components/task/task.component';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    TaskRoutingModule
  ],
  declarations: [
    TaskComponent
  ],
})
export class TaskModule { }
