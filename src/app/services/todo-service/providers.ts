import { Inject,OpaqueToken,provide } from 'angular2/core';
import {Subject} from 'rxjs/Subject';
import { Action } from './actions';
import { stateFn } from './state-fn';

// -- DI config
const initState = new OpaqueToken("initState");
export const dispatcher = new OpaqueToken("dispatcher");
export const state = new OpaqueToken("state");

export const TODO_PROVIDERS = [
  provide(initState, {useValue: {todos: [], visibilityFilter: 'SHOW_ALL'}}),
  provide(dispatcher, {useValue: new Subject<Action>(null)}),
  provide(state, {useFactory: stateFn, deps: [new Inject(initState), new Inject(dispatcher)]})
];
