'use strict';

import '../../css/app.scss';

import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Components
import Loader from './components/loader';
import Login from './login';
import Register from './register';
import Main from './main';
import masterReducer from '../reducers/masterReducer';

class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Loader />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/main' component={Main} />
        </Switch>
      </div>
    )
  }
}

// Create master store for all data
let masterStore = createStore(masterReducer, applyMiddleware(thunk));

// Log every state change
// NOTE: subscribe() returns a function for unregistering the listener
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
  document.querySelector('#app')
);