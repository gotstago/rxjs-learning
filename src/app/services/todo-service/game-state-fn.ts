import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {BehaviorSubject} from 'rxjs/subject/BehaviorSubject';

import { Todo, AppState, GameAppState, Game } from './state';
import { Action, AddTodoAction, ToggleTodoAction, SetVisibilityFilter,AddCardGameAction } from './actions';

// -- helpers
function merge(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}

// -- statefn
function games(initState: Game[], actions: Observable<Action>): Observable<Game[]> {
    console.log('starting games...');
    return actions.scan((state, action) => {//read each AppState as it gets updated - for every action from app
        console.log('in scan...');
        if (action instanceof AddCardGameAction) {
            const newTable = {id:action.gameId,cards:[],completed:false}
            const newGame = { id: action.gameId, name: action.name, completed: false, table: newTable, history:[newTable] };
            return [...state, newGame];
        } else {
            return state.map(g => updateGame(g, action));
        }
    }, initState);
}

function updateGame(game: Game, action: Action): Game {
    if (action instanceof ToggleTodoAction) {
        // merge creates a new object using the properties of the passed in objects
        return (action.id !== game.id) ? game : merge(game, { completed: !game.completed }) as Game;

    } else {
        return game;
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

export function gameStateFn(initState: GameAppState, actions: Observable<Action>): Observable<GameAppState> {
    console.log('starting gameStateFn...');

    const combine = s => ({ games: s[0], visibilityFilter: s[1] });

    const appStateObs: Observable<GameAppState> = 
        games(initState.games, actions).
        zip(filter(initState.visibilityFilter, actions)).//zip combines games result with filter result
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