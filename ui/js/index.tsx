import '../css/root.scss';

import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import masterReducer from './reducers/masterReducer';
import Login from './views/login';
import Animations from './views/animations';
import Categories from './views/categories';
import Movies from './views/movies';

class Binger extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/animations' component={Animations} />
          <Route path='/categories' component={Categories} />
          <Route path='/movies' component={Movies} />
        </Switch>
      </div>
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