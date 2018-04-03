'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import { connect } from 'react-redux';
import { switchLangAct } from '../actions/localeActions';

class Footer extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    const { switchLangDispatch } = this.props;

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
            <span onClick={e => switchLangDispatch('en')}>English</span>|
            <span onClick={e => switchLangDispatch('zh')}>中文</span>|
            <span onClick={e => switchLangDispatch('ja')}>日本語</span>
          </li>
        </ol>
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  localeState: store.localeReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  switchLangDispatch: (lang: string) => {
    dispatch(switchLangAct(lang))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
