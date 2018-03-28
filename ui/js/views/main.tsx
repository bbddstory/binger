'use strict';

import * as jq from 'jquery';
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { resetSearch, resetPages, resetFooter } from '../util/utils';

import Header from '../components/header';
import Categories from '../components/categories';
import Search from '../components/search';
import Home from '../components/main/home';
import Movies from '../components/main/movies';
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

  componentDidMount() {
    jq('body')[0].className = 'main-bg';
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
            <Route path='/main/tv' component={Movies} />
            <Route path='/main/docs' component={Movies} />
            <Route path='/main/anime' component={Movies} />
            <Route path='/main/adult' component={Movies} />
            <Route path='/main/ero' component={Movies} />
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
  dataState: store.dataReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  // loginDispath: (email: string, pwd: string) => {
    // dispatch(loginAct(email, pwd))
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
