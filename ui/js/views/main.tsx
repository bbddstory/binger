'use strict';

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { parseCookie, resetSearch, resetPages } from '../util/utils';
import { loginAct, setTokenAct } from '../actions/loginActions';

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
    // If this is a normal login, token should exist already
    let token = this.props.loginState.token;

    if (!token) {
      let cs = document.cookie.split(';');
      console.log(cs);

      if (cs[0] === '' || cs.length < 2) { // No user cookies found or not enough user info
        location.hash = '#';
        location.reload();
      } else {
        let co = parseCookie(cs);
        this.props.loginDispatch(co.token, co.email, co.user);
      }
    }
  }

  componentDidMount() {
    document.querySelector('body').className = 'main-bg';

    window.addEventListener('scroll', resetSearch, true);
    window.addEventListener('resize', resetSearch, true);

    window.addEventListener('scroll', resetPages, true);
    window.addEventListener('resize', resetPages, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', resetSearch, true);
    window.removeEventListener('resize', resetSearch, true);

    window.removeEventListener('scroll', resetPages, true);
    window.removeEventListener('resize', resetPages, true);
  }

  render() {
    const { uiState } = this.props;

    return (
      <IntlProvider locale={uiState.locale} messages={lang[uiState.locale]}>
        <div id='center'>
          <Loader />
          <Header />
          <Categories />
          {(this.props.dataState.category !== 'Home') && <Search />}
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
  loginState: store.loginReducer,
  dataState: store.dataReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  loginDispatch: (token: string, email: string, user: string) => {
    dispatch(setTokenAct(token, email, user))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
