import {Component} from 'angular2/core';
// import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { NewComponent } from './components/new-component/new-component';


@Component({
  selector: 'redux-two-app',
  providers: [],
  templateUrl: 'app/redux-two.html',
  directives: [NewComponent/*,ROUTER_DIRECTIVES*/],
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
