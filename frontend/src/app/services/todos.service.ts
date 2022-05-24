import { Injectable } from '@angular/core';

import { Todo } from '../models/todo';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos: Todo[] = [];

  private lastId: number = 0;

  constructor() { }

  // 
  public toggleDone(id: number):void {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    }
  )}

  public deleteTodo(id: number): void {
    // this.todos.forEach( (todo, index) => {
    //   if(todo.id === id) this.todos.splice(index, 1);
    // })
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }


  public addTodo(content: string): void {
    this.todos.push({
      id: this.lastId,
      content: content,
      completed: false
    })

    this.lastId++;
  }

  public getTodos(): Todo[] {
    return this.todos;
  }


}
