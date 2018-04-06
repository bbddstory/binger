'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { cleanUrl, parseHash, parseParam } from '../util/utils';

export default class Categories extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { active: '' }
  }

  chkStatus = (e: string) => {
    return e === parseHash() ? 'active' : ''
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
          <li><Link to="/main/movies" className={this.chkStatus('movies')}><FormattedMessage id='cats.movies' /></Link></li>
          <li><Link to="/main/tv" className={this.chkStatus('tv')}><FormattedMessage id='cats.tv' /></Link></li>
          <li><Link to="/main/docs" className={this.chkStatus('docs')}><FormattedMessage id='cats.docs' /></Link></li>
          <li><Link to="/main/anime" className={this.chkStatus('anime')}><FormattedMessage id='cats.anime' /></Link></li>
          <li><Link to="/main/xxx" className={this.chkStatus('xxx')}><FormattedMessage id='cats.xxx' /></Link></li>
          <li><Link to="/main/jav" className={this.chkStatus('jav')}><FormattedMessage id='cats.jav' /></Link></li>
        </ol>
      </div>
    )
  }
}