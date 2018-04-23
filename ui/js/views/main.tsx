'use strict';

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { parseCookie, resetSearch, resetPages } from '../util/utils';
import { loginAct } from '../actions/loginActions';

// Components
import Loader from './components/loader';
import Header from './components/header';
import Categories from './components/categories';
import Search from './components/search';
import Footer from './components/footer';

// Main
import Home from './main/home';
import SearchList from './main/searchList';
import CatList from './main/catList';
import CatDetails from './main/catDetails';
import SearchDetails from './main/searchDetails';
import EditDetails from './main/editDetails';

import { IntlProvider, addLocaleData } from 'react-intl';
import lang from '../i18n/languages';
import * as en from 'react-intl/locale-data/en';
import * as zh from 'react-intl/locale-data/zh';
import * as ja from 'react-intl/locale-data/ja';

addLocaleData(en);
addLocaleData(zh);
addLocaleData(ja);

class Main extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    // If this is a normal login firebase should exist already
    let firebase = this.props.loginState.firebase;

    if (!firebase.apps) {
      let ca = document.cookie.split(';');

      if (ca[0] === '' || ca.length < 2) { // No user cookies found or not enough user info
        location.hash = '#';
        location.reload();
      } else {
        let co = parseCookie(ca);
        this.props.loginDispatch(co.email, co.pwd);
      }
    }
  }

  componentDidMount() {
    document.querySelector('body').className = 'main-bg';
    window.addEventListener('scroll', resetSearch, true);
    window.addEventListener('resize', resetSearch, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', resetSearch, true);
    window.removeEventListener('resize', resetSearch, true);
  }

  render() {
    const { uiState } = this.props;

    return (
      <IntlProvider locale={uiState.locale} messages={lang[uiState.locale]}>
        <div id='center'>
          <Loader />
          <Header />
          <Categories />
          <Search />
          <Switch>
            <Route path='/main/home' component={Home} />
            <Route path='/main/search' component={SearchList} />
            <Route path='/main/search_details' component={SearchDetails} />
            <Route path='/main/movies' component={CatList} />
            <Route path='/main/tv' component={CatList} />
            <Route path='/main/docs' component={CatList} />
            <Route path='/main/anime' component={CatList} />
            <Route path='/main/xxx' component={CatList} />
            <Route path='/main/jav' component={CatList} />
            <Route path='/main/cat_details' component={CatDetails} />
          </Switch>
          <Footer />
          {uiState.editDetails && <EditDetails />}
        </div>
      </IntlProvider>
    )
  }
}

const mapStateToProps = (store: any) => ({
  uiState: store.uiReducer,
  loginState: store.loginReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  loginDispatch: (email: string, pwd: string) => {
    dispatch(loginAct(email, pwd))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
