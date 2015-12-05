import './../../support/test-helper';
import chai from 'chai';
import {describe, it} from 'mocha';
import configureStore from './../../store';
import {increment} from './../DummyActions';

chai.should();

describe('increment', () => {
  it('should increment', () => {
    const store = configureStore();

    store.getState().dummy.get('counter').should.eql(0);

    store.dispatch(increment());

    store.getState().dummy.get('counter').should.eql(1);
  });
});
