import {Component} from 'angular2/core';
// import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { AddTodo, Footer } from './components/new-component/new-component';
import { TodoList } from './components/todo-list/todo-list';
import { TODO_PROVIDERS } from './services/todo-service/providers';


@Component({
  selector: 'redux-two-app',
  providers: [TODO_PROVIDERS],
  templateUrl: 'app/redux-two.html',
  directives: [AddTodo, TodoList,Footer/*,ROUTER_DIRECTIVES*/],
  pipes: []
})
// @RouteConfig([

// ])
export class ReduxTwoApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
