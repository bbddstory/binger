import '../css/root.scss';

import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import masterReducer from './reducers/masterReducer';
import Login from './login';

class Binger extends React.Component<any, any> {
  render() {
    return (
      <Login />
    )
  }
}

// Create master store for all data
let masterStore = createStore(masterReducer);

// Log the initial state
console.log('-- index:', masterStore.getState());

// Log every state change
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = masterStore.subscribe(() =>
  console.log(masterStore.getState())
);

// Stop listening to state changes
// unsubscribe()

render(
  <HashRouter>
    <Provider store={masterStore}>
      <Binger />
    </Provider>
  </HashRouter>,
  document.getElementById('binger')
);