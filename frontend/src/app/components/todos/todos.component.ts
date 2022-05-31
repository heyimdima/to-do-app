import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todosService: TodosService) { }

  public todos$ = this.todosService.todos$;

  ngOnInit(): void {
    this.todosService.getTodos()
  }

  onFormSubmit(form: NgForm) {
    let todo: Todo = {
      id: 0,
      content: form.value.text,
      completed: false
    }
    this.todosService.addTodo(todo);
    
    form.reset();
  }

  //  
  toggleDone(id: number):void {
    this.todosService.toggleDone(id);
   }

  deleteTodo(id: number): void {
    this.todosService.deleteTodo(id);
  }


}
