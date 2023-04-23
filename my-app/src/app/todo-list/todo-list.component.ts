import { Component } from '@angular/core';
import { TodoItem } from './todo-item-interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  tasks: TodoItem[] = [
    {description: 'Iniciar estudo de Angular', done: true},
    {description: 'Concluir estudo de Angular', done: false},
    {description: 'Criar Site AM', done: false}
  ];

addTask(inputDescription: string)
{
  this.tasks.push({description: inputDescription, done: false });
}

deleteTask(i: number)
{
  this.tasks.splice(i,1);
}

}
