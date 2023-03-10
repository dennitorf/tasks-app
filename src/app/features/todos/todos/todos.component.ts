import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos : Todo[] = []

  constructor(private todoService : TodoService ) {
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.todoService.get().subscribe(todos => {

    }, error => {

    })
  }

}
