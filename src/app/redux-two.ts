import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
  selector: 'redux-two-app',
  providers: [],
  templateUrl: 'app/redux-two.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([

])
export class ReduxTwoApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
