import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl : string = "https://localhost:5001/api/todos"

  constructor(private httpClient : HttpClient) { }

  get() : Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl)
  }
}
