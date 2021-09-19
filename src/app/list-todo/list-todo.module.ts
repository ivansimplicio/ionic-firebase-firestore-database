import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTodoPageRoutingModule } from './list-todo-routing.module';

import { ListTodoPage } from './list-todo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTodoPageRoutingModule
  ],
  declarations: [ListTodoPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ListTodoPageModule {}
