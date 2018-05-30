'use strict';

import '../../css/app.scss';

import axios from 'axios';

import { connect } from 'react-redux';
import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { TOGGLE_LOADER } from '../actions/uiActions';

// Components
import Loader from './components/loader';
import Login from './login';
import Register from './register';
import Main from './main';
import masterReducer from '../reducers/masterReducer';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    // Global Axios response interceptor
    axios.interceptors.response.use(null, err => {
      // console.log(err.response.status);
      
      // For handling cookie expiration
      if (err.response.status === 401 || err.response.status === 403) { // Not authorized
        location.hash = '';
      }
      if (err.response.status === 404) { // Email not found
        this.props.loaderDispatch('Email not found');
      }
      if (err.response.status === 406) { // Email or password wrong
        this.props.loaderDispatch('Email or password wrong');
      }
    });
  }

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

const mapStateToProps = (store: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
  loaderDispatch: (txt: string) => {
    dispatch({ type: TOGGLE_LOADER, status: false });
    alert(txt);
  }
});

let AppReduxCls = connect(mapStateToProps, mapDispatchToProps)(App);

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
      <AppReduxCls />
    </Provider>
  </HashRouter>,
  document.querySelector('#app')
);