import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './services/todo.service';


@NgModule({
  declarations: [
    TodosComponent
  ],
  providers: [
    TodoService
  ],
  imports: [
    CommonModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
