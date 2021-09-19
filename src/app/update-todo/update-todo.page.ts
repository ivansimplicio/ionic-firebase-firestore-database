/* eslint-disable @typescript-eslint/dot-notation */

import { TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.page.html',
  styleUrls: ['./update-todo.page.scss'],
})

export class UpdateTodoPage implements OnInit {

  editForm: FormGroup;
  id: any;

  constructor(
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.todoService.getTask(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        title: [data['title']],
        description: [data['description']]
      });
    });
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      title: [''],
      description: ['']
    });
  }

  onSubmit() {
    this.todoService.update(this.id, this.editForm.value);
  }
}
