'use strict';

import '../../css/app.scss';

import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Login from './login';
import Main from './main';
import masterReducer from '../reducers/masterReducer';

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

// Log every state change
const unsubscribe = masterStore.subscribe(() =>
  // Note that subscribe() returns a function for unregistering the listener
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