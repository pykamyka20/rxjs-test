import { TaskComponent } from './components/task/task.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const taskRoutes: Routes = [
  {
    path: '',
    component: TaskComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(taskRoutes)
  ],
  exports: [RouterModule]
})
export class TaskRoutingModule {}
