'use strict';

import * as jq from 'jquery';
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { inView } from '../util/utils';
import Header from '../components/header';
import Search from '../components/search';
import Categories from '../components/categories';
import Home from '../components/main/home';
import Movies from '../components/main/movies';
import Footer from '../components/footer';
import Details from '../components/main/details';

import lang from "../../i18n/languages";
import { addLocaleData, IntlProvider } from 'react-intl';
import * as en from "react-intl/locale-data/en";
import * as zh from "react-intl/locale-data/zh";
import * as ja from "react-intl/locale-data/ja";

addLocaleData(en);
addLocaleData(zh);
addLocaleData(ja);

class Main extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { email: 'bbddstory@gmail.com', pwd: 'LEON314@firebase' }
  }

  resetFooter = () => {
    if (Math.ceil(jq('.footer').offset().top + jq('.footer').height()) < window.innerHeight) {
      jq('.footer').addClass('footer-fixed')
    }
    if (Math.ceil(document.getElementById('center').scrollHeight) > window.innerHeight) {
      jq('.footer').removeClass('footer-fixed')
    }
  }

  handleScroll = () => {
    // For Search component
    if (!inView('#search') && !jq('#search-box').hasClass('search-fixed')) {
      jq('#search-box').removeClass('search-restore');
      jq('#search-box').addClass('search-fixed');
    }
    if (inView('#search') && jq('#search-box').hasClass('search-fixed')) {
      jq('#search-box').removeClass('search-fixed');
      jq('#search-box').addClass('search-restore');
    }
  }

  componentDidMount() {
    document.getElementsByTagName('body')[0].className = 'main_bg';
    window.addEventListener('scroll', this.handleScroll, true);
    window.addEventListener('resize', this.handleScroll, true);
    window.addEventListener('resize', this.resetFooter, true);
    this.resetFooter();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
    window.removeEventListener('resize', this.handleScroll, true);
    window.removeEventListener('resize', this.resetFooter, true);
  }

  componentDidUpdate() {
    this.resetFooter();
  }

  render() {
    const { localeState } = this.props;
    return (
      <IntlProvider locale={localeState.lang} messages={lang[localeState.lang]}>
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
      </IntlProvider>
    )
  }
}

const mapStateToProps = (state: any) => ({
  dataState: state.dataReducer,
  localeState: state.localeReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  loginDispath: (email: string, pwd: string) => {
    // dispatch(loginAct(email, pwd))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
