
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main-page/main/main.component';
import { MainRoutingModule } from './main.routing.module';


@NgModule({
  imports: [
    MainRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MainComponent,
  ],
})
export class MainModule { }
