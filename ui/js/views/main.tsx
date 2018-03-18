'use strict';

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/header';
import Search from '../components/search';
import Path from '../components/path';
import Categories from '../components/main/categories';
import Movies from '../components/main/movies';

class Main extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { email: 'bbddstory@gmail.com', pwd: 'LEON314@firebase' }
  }

  render() {
    return (
      <div>
        <Header />
        <Search />
        <Path />
        <Switch>
          <Route exact path='/main' component={Categories} />
          <Route path='/main/anime' component={Movies} />
          <Route path='/main/docs' component={Movies} />
          <Route path='/main/movies' component={Movies} />
          <Route path='/main/tv' component={Movies} />
          <Route path='/main/xxx' component={Movies} />
          <Route path='/main/ero' component={Movies} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  loginState: state.loginReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  loginDispath: (email: string, pwd: string) => {
    // dispatch(loginAct(email, pwd))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
