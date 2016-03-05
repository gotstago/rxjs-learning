import {Component} from 'angular2/core';
// import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { AddTodo, TodoList,Footer, NewComponent, stateAndDispatcher } from './components/new-component/new-component';


@Component({
  selector: 'redux-two-app',
  providers: [stateAndDispatcher],
  templateUrl: 'app/redux-two.html',
  directives: [NewComponent,AddTodo, TodoList,Footer/*,ROUTER_DIRECTIVES*/],
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
