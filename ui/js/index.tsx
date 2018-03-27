'use strict';

import '../css/root.scss';

import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Login from './views/login';
import Main from './views/main';
import masterReducer from './reducers/masterReducer';

class App extends React.Component<any, any> {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/main' component={Main} />
      </Switch>
    )
  }
}

// const loginMiddleware = (store: any) => (next: any) => (action: any) => {
//   console.log('loginMiddleware: ', action);
//   next(action);
// }

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
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('app')
);