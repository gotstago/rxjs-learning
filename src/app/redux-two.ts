import {Component} from 'angular2/core';
// import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
//import { Footer } from './components/new-component/new-component';
import { TodoList } from './components/todo-list/todo-list';
import { TodoAdd } from './components/todo-add/todo-add';
import { TodoFooter } from './components/todo-footer/todo-footer';
import { TODO_PROVIDERS } from './services/todo-service/providers';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/zip';


@Component({
  selector: 'redux-two-app',
  providers: [TODO_PROVIDERS],
  templateUrl: 'app/redux-two.html',
  directives: [TodoAdd, TodoList,TodoFooter/*,ROUTER_DIRECTIVES*/],
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
