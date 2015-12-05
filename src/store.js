import { compose, createStore } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import reducer from './reducers/reducer';

export default function configureStore(initialState) {
  if (__DEV__) {
    const finalCreateStore = compose(
      devTools(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore);
    return finalCreateStore(reducer, initialState);
  }
  return createStore(reducer, initialState);
}
