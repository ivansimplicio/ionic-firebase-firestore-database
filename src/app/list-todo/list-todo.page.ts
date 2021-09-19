/* eslint-disable arrow-body-style */
import { TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';

export class Todo {
  $key: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.page.html',
  styleUrls: ['./list-todo.page.scss'],
})

export class ListTodoPage implements OnInit {

  tasks: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTasks().subscribe((res) => {
      this.tasks = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as Todo
        };
      });
    });
  }

  todoList() {
    this.todoService.getTasks()
    .subscribe((data) => {
      console.log(data);
    });
  }

  remove(id) {
    console.log(id);
    if (window.confirm('Tem certeza?')) {
      this.todoService.delete(id);
    }
  }
}
