import {Component,Inject} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import { dispatcher,state } from '../../services/todo-service/providers';
import { Action,ToggleTodoAction } from '../../services/todo-service/actions';
import { AppState,Todo } from '../../services/todo-service/state';
//import { getVisibleTodos } from '../../services/todo-service/state-fn';
import { TodoDetail } from '../todo-detail/todo-detail';


@Component({
  selector: 'todo-list',
  templateUrl: 'app/components/todo-list/todo-list.html',
  styleUrls: ['app/components/todo-list/todo-list.css'],
  providers: [],
  directives: [TodoDetail],
  pipes: []
})
export class TodoList {
  constructor(@Inject(dispatcher) private dispatcher: Observer<Action>,
              @Inject(state) private state: Observable<AppState>) {}

  get filtered() { //returns Todo[] Observable - no need to call subscribe since the filter in html will
      return this.state.map(s => //current AppState
        getVisibleTodos(s.todos, s.visibilityFilter)//mapping AppState to Todo[]
      ); 
  }

  emitToggle(id) { 
      this.dispatcher.next(
          new ToggleTodoAction(id)
      ); 
  }
}


function getVisibleTodos(todos: Todo[], filter: string): Todo[] {
  return todos.filter(t => {
    if (filter === "SHOW_ACTIVE") return !t.completed;
    if (filter === "SHOW_COMPLETED") return t.completed;
    return true;
  });
}

