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
import {TodoFilterLink} from './todo-filter-link';
import { TODO_PROVIDERS } from '../../services/todo-service/providers';


describe('TodoFilterLink Component', () => {

  beforeEachProviders((): any[] => [TODO_PROVIDERS]);


//   it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
//     return tcb.createAsync(TodoFilterLink).then((fixture) => {
//       fixture.detectChanges();
//     });
//   }));

});
