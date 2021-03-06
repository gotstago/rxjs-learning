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
import {TodoFooter} from './todo-footer';
import { TODO_PROVIDERS } from '../../services/todo-service/providers';


describe('TodoFooter Component', () => {

  beforeEachProviders((): any[] => [TODO_PROVIDERS]);


  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(TodoFooter).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
