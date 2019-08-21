import React, {Component} from 'react';
import CounterApp from './source/CounterApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  console.log('llllll', action);
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1};
    default:
      return state;
  }
};

let store = createStore(reducer);

class ReduxExample extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}

export default ReduxExample;
