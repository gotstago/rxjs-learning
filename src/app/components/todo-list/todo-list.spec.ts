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
import {TodoList} from './todo-list';
import { TODO_PROVIDERS } from '../../services/todo-service/providers';


describe('TodoList Component', () => {

  beforeEachProviders((): any[] => [TODO_PROVIDERS]);


  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(TodoList).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
