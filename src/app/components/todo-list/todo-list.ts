import {Component,Inject} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import { TodoC,Action,AppState,getVisibleTodos,ToggleTodoAction } from '../new-component/new-component';
import { TODO_PROVIDERS,dispatcher,state } from '../../services/todo-service/providers';
import { TodoDetail } from '../todo-detail/todo-detail';


@Component({
  selector: 'todo-list',
  templateUrl: 'app/components/todo-list/todo-list.html',
  styleUrls: ['app/components/todo-list/todo-list.css'],
  providers: [TODO_PROVIDERS],
  directives: [TodoDetail],
  pipes: []
})
export class TodoList {
  constructor(@Inject(dispatcher) private dispatcher: Observer<Action>,
              @Inject(state) private state: Observable<AppState>) {}

  get filtered() { return this.state.map(s => getVisibleTodos(s.todos, s.visibilityFilter)); }

  emitToggle(id) { this.dispatcher.next(new ToggleTodoAction(id)); }
}
