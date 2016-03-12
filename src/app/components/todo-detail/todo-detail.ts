import {Component, Input, Output, EventEmitter} from 'angular2/core';


@Component({
    selector: 'todo-detail',
    templateUrl: 'app/components/todo-detail/todo-detail.html',
    styleUrls: ['app/components/todo-detail/todo-detail.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class TodoDetail {

    constructor() { }
    @Input() text: string;
    @Input() completed: boolean;
    @Output() toggle = new EventEmitter();

    get textEffect() { 
        return this.completed ? 'line-through' : 'none'; 
    }

}


// @Component({
//   selector: 'todo',
//   template: `<span (click)="toggle.next()" [style.textDecoration]="textEffect">
//                {{text}}
//              </span><p>in todoc...</p>`
// })
// export class TodoC {
//   @Input() text: string;
//   @Input() completed: boolean;
//   @Output() toggle = new EventEmitter();

//   get textEffect() { return this.completed ? 'line-through' : 'none'; }
// }