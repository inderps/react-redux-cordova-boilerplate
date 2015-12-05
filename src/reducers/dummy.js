import {Map, List} from 'immutable';
import {DUMMY_INCREMENT_ACTION} from './../constants/action-constants';

const initialState = new Map({
  list: new List([]),
  map: new Map(),
  counter: 0,
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case DUMMY_INCREMENT_ACTION:
    return state.set('counter', state.get('counter') + 1);
  default:
    return state;
  }
}
