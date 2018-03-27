'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

export default class Categories extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="categories">
        <ol>
          <li><Link to="/main/movies" className="active"><FormattedMessage id='cats.movies' /></Link></li>
          <li><Link to="/main/tv"><FormattedMessage id='cats.tv' /></Link></li>
          <li><Link to="/main/docs"><FormattedMessage id='cats.docs' /></Link></li>
          <li><Link to="/main/anime"><FormattedMessage id='cats.anime' /></Link></li>
          <li><Link to="/main/xxx"><FormattedMessage id='cats.xxx' /></Link></li>
          <li><Link to="/main/jav"><FormattedMessage id='cats.jav' /></Link></li>
        </ol>
      </div>
    )
  }
}