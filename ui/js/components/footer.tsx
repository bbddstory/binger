'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

export default class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { email: 'keyword' }
  }

  handleChange(e: any) {
  }

  render() {
    return (
      <div className="footer">
        <ol>
          <li><Link to="/main/nas"><FormattedMessage id='ft.zone' /></Link></li>
          <li><Link to="/main/home"><FormattedMessage id='ft.home' /></Link></li>
          <li><Link to="/main/feedback">
            <img alt="Feedback" src="ui/images/footer/ic_feedback_white_24px.svg" />
            <FormattedMessage id='ft.fb' />
          </Link></li>
          <li><Link to="/main/language">
            <img alt="Feedback" src="ui/images/footer/ic_language_white_24px.svg" />
            <FormattedMessage id='ft.lang' />
          </Link></li>
        </ol>
      </div>
    )
  }
}