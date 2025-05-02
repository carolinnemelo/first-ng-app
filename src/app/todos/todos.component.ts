import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todosService = inject(TodosService);
  todoItems = signal<Todo[]>([]);

  ngOnInit(): void {
    const todos = this.todosService.getTodosFromApi().subscribe((todos) => {
      this.todoItems.set(todos);
    });
  }
}
