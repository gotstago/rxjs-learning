import {Component} from 'angular2/core';
import { TodoFilterLink } from '../todo-filter-link/todo-filter-link';

@Component({
  selector: 'todo-footer',
  templateUrl: 'app/components/todo-footer/todo-footer.html',
  styleUrls: ['app/components/todo-footer/todo-footer.css'],
  providers: [],
  directives: [TodoFilterLink],
  pipes: []
})
export class TodoFooter {

  constructor() {}

}

// @Component({
//   selector: 'footer',
//   template: `<filter-link filter="SHOW_ALL">All</filter-link>
//             <filter-link filter="SHOW_ACTIVE">Active</filter-link>
//             <filter-link filter="SHOW_COMPLETED">Completed</filter-link>`,
//   directives: [FilterLink]
// })
// export class Footer {}
