import {Component,Inject} from 'angular2/core';
import {Observer} from 'rxjs/Observer';
import { Action,AddTodoAction } from '../../services/todo-service/actions';
import { dispatcher } from '../../services/todo-service/providers';

var nextId = 0;

@Component({
  selector: 'todo-add',
  templateUrl: 'app/components/todo-add/todo-add.html',
  styleUrls: ['app/components/todo-add/todo-add.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class TodoAdd {

  constructor(@Inject(dispatcher) private dispatcher: Observer<Action>) {}
  addTodo(value) { this.dispatcher.next(new AddTodoAction(nextId++, value)); }

}

// var nextId = 0;
// @Component({
//   selector: 'add-todo',
//   template: `<input #text><button (click)="addTodo(text.value)">Add Todo</button>`
// })
// export class AddTodo {
//   constructor(@Inject(dispatcher) private dispatcher: Observer<Action>) {}
//   addTodo(value) { this.dispatcher.next(new AddTodoAction(nextId++, value)); }
// }