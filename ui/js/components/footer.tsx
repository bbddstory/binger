'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import { connect } from 'react-redux';
import { switchLang } from '../actions/localeActions';

class Footer extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { email: 'keyword' }
  }

  switchLang = (e: string) => {
    console.log(e);
    this.props.switchLang(e);
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
          <li>
            <img alt="Feedback" src="ui/images/footer/ic_language_white_24px.svg" />
            <span onClick={e => this.switchLang('en')}>English</span>&nbsp;|
            <span onClick={e => this.switchLang('zh')}>中文</span>&nbsp;|
            <span onClick={e => this.switchLang('ja')}>日本語</span>
          </li>
        </ol>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  localeState: state.localeReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  switchLang: (lang: string) => {
    dispatch(switchLang(lang))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
