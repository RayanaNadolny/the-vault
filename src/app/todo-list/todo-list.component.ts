import { Component, inject } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CheckboxModule, ButtonModule, InputTextModule, FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todoService = inject(TodoService);
  newTodo = '';
  todos: any[] = [];

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  saveTodo() {
    this.todoService.saveTodo(this.newTodo);
    this.newTodo = '';
  }

  updateTodoState(id: string, completed: boolean) {
    this.todoService.updateTodoState(id, completed);
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id);
  }
}
