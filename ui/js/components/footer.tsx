'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import { switchLocaleAct } from '../actions/uiActions';

class Footer extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    const { switchLocaleDispatch } = this.props;

    return (
      <div className="footer">
        <ol>
          <li><Link to="/main/nas"><FormattedMessage id='ft.zone' /></Link></li>
          <li><Link to="/main/home"><FormattedMessage id='ft.home' /></Link></li>
          <li><Link to="/main/feedback">
            {/* <img alt="Feedback" src="images/footer/ic_feedback_white_24px.svg" /> */}
            <FormattedMessage id='ft.fb' />
          </Link></li>
          <li>
            {/* <img alt="Languages" src="images/footer/ic_language_white_24px.svg" /> */}
            <span onClick={e => switchLocaleDispatch('en')}>English</span>|
            <span onClick={e => switchLocaleDispatch('zh')}>中文</span>|
            <span onClick={e => switchLocaleDispatch('ja')}>日本語</span>
          </li>
        </ol>
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  uiState: store.uiReducer,
});

const mapDispatchToProps = (dispatch: any) => ({
  switchLocaleDispatch: (locale: string) => {
    dispatch(switchLocaleAct(locale))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
