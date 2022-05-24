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
    this.todos.map((todo) => {
      if (todo.id == id) todo.completed = !todo.completed;

      return todo;
    }
  )}

  public deleteTodo(id: number): void {
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
