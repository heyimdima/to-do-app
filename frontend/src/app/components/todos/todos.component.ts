import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = this.todosService.getTodos();

  inputTodo: string = "";

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  // 
  toggleDone(id: number):void {
    this.todosService.toggleDone(id);
    this.todos = this.todosService.getTodos();
   }

  deleteTodo(id: number): void {
    this.todosService.deleteTodo(id);
    this.todos = this.todosService.getTodos();
  }

  addTodo(): void {
    this.todosService.addTodo(this.inputTodo);
    this.todos = this.todosService.getTodos();
    this.inputTodo = '';
  }

}
