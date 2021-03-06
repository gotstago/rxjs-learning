import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {BehaviorSubject} from 'rxjs/subject/BehaviorSubject';

import { Todo, AppState } from './state';
import { Action, AddTodoAction, ToggleTodoAction, SetVisibilityFilter } from './actions';

// -- helpers
function merge(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}

// -- statefn
function todos(initState: Todo[], actions: Observable<Action>): Observable<Todo[]> {
    console.log('starting todos...');
    return actions.scan((state, action) => {//read each AppState as it gets updated - for every action from app
        console.log('in scan...');
        if (action instanceof AddTodoAction) {
            const newTodo = { id: action.todoId, text: action.text, completed: false };
            return [...state, newTodo];
        } else {
            return state.map(t => updateTodo(t, action));
        }
    }, initState);
}

function updateTodo(todo: Todo, action: Action): Todo {
    if (action instanceof ToggleTodoAction) {
        // merge creates a new object using the properties of the passed in objects
        return (action.id !== todo.id) ? todo : merge(todo, { completed: !todo.completed }) as Todo;

    } else {
        return todo;
    }
}

function filter(initState: string, actions: Observable<Action>): Observable<string> {
    console.log('in filter...');
    //if the incoming action is SetVisibilityFilter, return new value, otherwise pass thru current value
    return actions.scan((state, action) => {
        if (action instanceof SetVisibilityFilter) {
            return action.filter;
        } else {
            return state;
        }
    }, initState);
}

export function stateFn(initState: AppState, actions: Observable<Action>): Observable<AppState> {
    console.log('starting stateFn...');

    const combine = s => ({ todos: s[0], visibilityFilter: s[1] });

    const appStateObs: Observable<AppState> = 
        todos(initState.todos, actions).
        zip(filter(initState.visibilityFilter, actions)).//zip combines todos result with filter result
        map(combine);
    
    return wrapIntoBehavior(initState, appStateObs);
}

function wrapIntoBehavior(init, obs) {
    console.log('starting wrapIntoBehavior...');
    const res = new BehaviorSubject(init);
    obs.subscribe(s => res.next(s));//seed the wrapper with state from AppState
    return res;
}

// const mergeFn = (todos: Todo[], visibilityFilter: string) => ({
// todos, 
// visibilityFilter
// });

// const appStateObj: Observable<appstate> = Observable.zip(
// todos(initState.todos, actions),
// filter(initState.visibilityFilter, actions),
// mergeFn
// );