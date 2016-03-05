import {Component,Input,Inject} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import { SetVisibilityFilter,Action } from '../../services/todo-service/actions';
import { AppState } from '../../services/todo-service/state';
import { state,dispatcher } from '../../services/todo-service/providers';

@Component({
  selector: 'todo-filter-link',
  templateUrl: 'app/components/todo-filter-link/todo-filter-link.html',
  styleUrls: ['app/components/todo-filter-link/todo-filter-link.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class TodoFilterLink {
  @Input() filter: string;
  constructor(@Inject(dispatcher) private dispatcher: Observer<Action>, 
              @Inject(state) private state: Observable<AppState>){}

  get textEffect() { return this.state.map(s => s.visibilityFilter === this.filter ? 'underline' : 'none'); }

  setVisibilityFilter() { this.dispatcher.next(new SetVisibilityFilter(this.filter)); }
}
// @Component({
//   selector: 'filter-link',
//   template: `<a href="#" (click)="setVisibilityFilter()"
//                [style.textDecoration]="textEffect|async"><ng-content></ng-content></a>`
// })
// class FilterLink {
//   @Input() filter: string;
//   constructor(@Inject(dispatcher) private dispatcher: Observer<Action>, 
//               @Inject(state) private state: Observable<AppState>){}

//   get textEffect() { return this.state.map(s => s.visibilityFilter === this.filter ? 'underline' : 'none'); }

//   setVisibilityFilter() { this.dispatcher.next(new SetVisibilityFilter(this.filter)); }
// }
