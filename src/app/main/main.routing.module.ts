import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main-page/main/main.component';


const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {breadcrumbs: 'Profile info'}
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule {}
