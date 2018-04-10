'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import dataTypes from '../util/dataTypes';
import { setCategoryAct } from '../actions/categoriesActions';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { cleanUrl, parseHash, parseParam } from '../util/utils';

class Categories extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { active: '' }
  }

  chkStatus = (cat: string) => {
    return cat === parseHash() ? 'active' : ''
  }

  componentWillMount() {
    cleanUrl();
  }

  componentDidMount() {
    // console.log(parseParam('p'));
  }

  render() {
    return (
      <div className="categories">
        <ol>
          <li>
            <Link to="/main/movies" className={this.chkStatus('movies')} onClick={e => this.props.setCatDispatch(dataTypes.MOVIE)}>
              <FormattedMessage id='cats.movies' />
            </Link>
          </li>
          <li>
            <Link to="/main/tv" className={this.chkStatus('tv')} onClick={e => this.props.setCatDispatch(dataTypes.TV)}>
              <FormattedMessage id='cats.tv' />
            </Link>
          </li>
          <li>
            <Link to="/main/docs" className={this.chkStatus('docs')} onClick={e => this.props.setCatDispatch(dataTypes.DOC)}>
              <FormattedMessage id='cats.docs' />
            </Link>
          </li>
          <li>
            <Link to="/main/anime" className={this.chkStatus('anime')} onClick={e => this.props.setCatDispatch(dataTypes.ANIME)}>
              <FormattedMessage id='cats.anime' />
            </Link>
          </li>
          <li>
            <Link to="/main/xxx" className={this.chkStatus('xxx')} onClick={e => this.props.setCatDispatch(dataTypes.XXX)}>
              <FormattedMessage id='cats.xxx' />
            </Link>
          </li>
          <li>
            <Link to="/main/jav" className={this.chkStatus('jav')} onClick={e => this.props.setCatDispatch(dataTypes.JAV)}>
              <FormattedMessage id='cats.jav' />
            </Link>
          </li>
        </ol>
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  // loginState: store.loginReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  setCatDispatch: (cat: string) => {
    dispatch(setCategoryAct(cat))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);