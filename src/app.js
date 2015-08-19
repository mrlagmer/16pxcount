import { createStore } from 'redux';
import counter from './Reducers';
import { increase, decrease} from './Actions';

let store = createStore(counter);

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(increase());
store.dispatch(increase());
store.dispatch(increase());
store.dispatch(decrease());

// Stop listening to state updates
unsubscribe();
