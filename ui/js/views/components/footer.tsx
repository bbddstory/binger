'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import { switchLocaleAct } from '../../actions/uiActions';

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
          <li><Link to="/main/home"><FormattedMessage id='ft.home' /></Link></li>
          <li><a target="_blank" href="http://quickconnect.to/phantomzone"><FormattedMessage id='ft.zone' /></a></li>
          <li><Link to="/main/feedback"><FormattedMessage id='ft.fb' /></Link></li>
          <li>
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
