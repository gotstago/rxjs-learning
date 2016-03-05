import {bootstrap} from 'angular2/platform/browser';
import {ReduxTwoApp} from './app/redux-two';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(ReduxTwoApp, [
  ROUTER_PROVIDERS
]);
