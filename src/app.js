import { createStore } from 'redux';
import React from 'react';
import counter from './Reducers';
import Counter from './Components/Counter';
import { increase, decrease, INCREASEACTION, DECREASEACTION} from './Reducers';
import { Provider, connect } from 'react-redux';


let store = createStore(counter);

function mapStateToProps(state)  {
  return {
    count: state.count
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease())
  };
}

// Connected Component:
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.body
);
