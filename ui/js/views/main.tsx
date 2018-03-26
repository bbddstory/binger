'use strict';

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/header';
import Search from '../components/search';
import Categories from '../components/categories';
import Home from '../components/main/home';
import Movies from '../components/main/movies';
import Footer from '../components/footer';
import Details from '../components/main/details';

class Main extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { email: 'bbddstory@gmail.com', pwd: 'LEON314@firebase' }
  }

  componentDidMount() {
    document.getElementsByTagName('body')[0].className = 'main_bg';
  }

  render() {
    return (
      <div id="center">
        <Header />
        <Categories />
        <Search />
        <Switch>
          <Route path='/main/home' component={Home} />
          <Route path='/main/anime' component={Movies} />
          <Route path='/main/docs' component={Movies} />
          <Route path='/main/movies' component={Movies} />
          <Route path='/main/tv' component={Movies} />
          <Route path='/main/adult' component={Movies} />
          <Route path='/main/ero' component={Movies} />
          <Route path='/main/details' component={Details} />
        </Switch>
        <Footer />
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
