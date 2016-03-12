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
import {TodoAdd} from './todo-add';
import { TODO_PROVIDERS } from '../../services/todo-service/providers';



describe('TodoAdd Component', () => {

  beforeEachProviders((): any[] => [TODO_PROVIDERS]);


  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(TodoAdd).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
