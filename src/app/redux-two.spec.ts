import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {ReduxTwoApp} from '../app/redux-two';

beforeEachProviders(() => [ReduxTwoApp]);

describe('App: ReduxTwo', () => {
  it('should have the `defaultMeaning` as 42', inject([ReduxTwoApp], (app: ReduxTwoApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([ReduxTwoApp], (app: ReduxTwoApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

