import {
it,
iit,
describe,
ddescribe,
expect,
inject,
injectAsync,
TestComponentBuilder,
beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
// import {TodoService} from './todo-service';
import {Subject} from 'rxjs/Subject';
import { Action, AddTodoAction, ToggleTodoAction, AddCardGameAction } from './actions';
import { stateFn } from './state-fn';
import { gameStateFn } from './game-state-fn';

describe('TodoService Service', () => {

    beforeEachProviders(() => []);


    it('should create a new game', () => {
        const actions = new Subject<Action>();
        const states = gameStateFn({ games: [], visibilityFilter: 'SHOW_ALL' }, actions);

        actions.next(new AddCardGameAction(100, 'tarabish'));
        actions.next(new AddCardGameAction(101, 'tarabish'));

        states.subscribe(s => {
            expect(s.games.length).toEqual(2);
            expect(s.games[0]).toEqual({ id: 100, name: 'tarabish', completed: false });
            expect(s.games[1]).toEqual({ id: 101, name: 'tarabish', completed: false });
        });
    });

    it('should create a new todo', () => {
        const actions = new Subject<Action>();
        const states = stateFn({ todos: [], visibilityFilter: 'SHOW_ALL' }, actions);

        actions.next(new AddTodoAction(100, 'todo1'));
        actions.next(new AddTodoAction(101, 'todo2'));

        states.subscribe(s => {
            expect(s.todos.length).toEqual(2);
            expect(s.todos[0]).toEqual({ id: 100, text: 'todo1', completed: false });
            expect(s.todos[1]).toEqual({ id: 101, text: 'todo2', completed: false });
        });
    });

    it('should toggle a todo', () => {
        const actions = new Subject<Action>();
        const todos = [
            { id: 100, text: 'todo1', completed: false },
            { id: 101, text: 'todo2', completed: false }];
        const states = stateFn({ todos: todos, visibilityFilter: 'SHOW_ALL' }, actions);

        actions.next(new ToggleTodoAction(100));

        states.subscribe(s => {
            expect(s.todos[0].completed).toBeTruthy();
            expect(s.todos[1].completed).toBeFalsy();
            //expect(s.todos[0].completed).toBeTruthy();
        });
    });
});
