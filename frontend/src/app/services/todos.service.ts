import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs';

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos$$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])
  public todos$: Observable<Todo[]> = this.todos$$.asObservable();

  public lastId: number = 0;


  constructor(public http: HttpClient) { }

  // 
  public toggleDone(id: number):void {
    const url = `${env.url}/todo/${id}`

    this.http.put<number>(url, id, options).subscribe(
      _ => this.getTodos());

  }

  public deleteTodo(id: number) : void {
    // this.todos = this.todos.filter((todo) => todo.id !== id);
    const url = `${env.url}/todo/${id}`

    this.http.delete<number>(url, options).subscribe(
      _ => this.getTodos()
    );
  }


  public addTodo(todo: Todo): void {
    const url = `${env.url}/todo`;

    this.http.post<Todo[]>(url, todo, options).subscribe(
      todos => this.todos$$.next(todos)
    )
  }

  public getTodos(): void {
    const url = `${env.url}/todos`;

    this.http.get<Todo[]>(url, options).subscribe(
      todos => this.todos$$.next(todos)
    );
  }




}
