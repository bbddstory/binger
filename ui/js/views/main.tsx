'use strict';

import swal from 'sweetalert2';
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { parseCookie, resetSearch, resetPages, resetFooter } from '../util/utils';
import { loginAct } from '../actions/loginActions';

import Header from '../components/header';
import Categories from '../components/categories';
import Search from '../components/search';
import Home from '../components/main/home';
import Movies from '../components/main/movies';
import Tv from '../components/main/tv';
import Docs from '../components/main/docs';
import Anime from '../components/main/anime';
import Details from '../components/main/details';
import EditDetails from '../components/main/editDetails';
import Footer from '../components/footer';

import { IntlProvider, addLocaleData } from 'react-intl';
import lang from '../../i18n/languages';
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
    // If this is a normal login, then firebase should exist already
    let firebase = this.props.loginState.firebase;

    if (!firebase.apps) {
      let ca = document.cookie.split(';');

      if (ca[0] === '' || ca.length < 2) { // No user cookies found or not enough user info
        swal({
          type: 'error',
          title: 'You\'re Not Signed In',
          html: 'Please sign in using your Google account.',
          allowOutsideClick: false,
          allowEscapeKey: false,
          confirmButtonText: 'Sign In'
        }).then(() => {
          location.hash = '#';
          location.reload();
        }, (dismiss) => { });
      } else {
        let co = parseCookie(ca);
        this.props.loginDispatch(co.email, co.pwd);
      }
    }
  }

  componentDidMount() {
    document.querySelector('body').className = 'main-bg';
    swal.hideLoading();
    window.addEventListener('scroll', resetSearch, true);
    window.addEventListener('scroll', resetFooter, true);
    window.addEventListener('resize', resetSearch, true);
    window.addEventListener('resize', resetFooter, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', resetSearch, true);
    window.removeEventListener('scroll', resetFooter, true);
    window.removeEventListener('resize', resetSearch, true);
    window.removeEventListener('resize', resetFooter, true);
  }

  // componentDidUpdate() {
  //   resetPages();
  //   resetFooter();
  // }

  render() {
    const { localeState } = this.props;

    return (
      <IntlProvider locale={localeState.lang} messages={lang[localeState.lang]}>
        <div id='center'>
          <Header />
          <Categories />
          <Search />
          <Switch>
            <Route path='/main/home' component={Home} />
            <Route path='/main/movies' component={Movies} />
            <Route path='/main/tv' component={Tv} />
            <Route path='/main/docs' component={Docs} />
            <Route path='/main/anime' component={Anime} />
            <Route path='/main/xxx' component={Movies} />
            <Route path='/main/jav' component={Movies} />
            <Route path='/main/details' component={Details} />
          </Switch>
          <Footer />
          {/* {localeState.lang === 'en' && <EditDetails />} */}
        </div>
      </IntlProvider>
    )
  }
}

const mapStateToProps = (store: any) => ({
  localeState: store.localeReducer,
  loginState: store.loginReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  loginDispatch: (email: string, pwd: string) => {
    dispatch(loginAct(email, pwd))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
