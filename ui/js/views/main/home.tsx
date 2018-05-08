'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { syncHomeListAct } from '../../actions/homeActions';
import { FormattedMessage } from "react-intl";
import TileList from './tileList';

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  syncHomeList() {
    this.props.syncHomeListDispatch();
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    // this.syncHomeList()
  }

  componentDidMount() {
    this.syncHomeList()
  }

  render() {
    const { loginState } = this.props;

    return (
      <div className="home">
        <h1><FormattedMessage id='home.latest' /></h1>
        <div className="home-list">
          {loginState.latest ?
            <TileList dataRef={loginState.latest} delBtn={false} showPages={false} isSearch={false} category="" list="" />
            : <FormattedMessage id='home.empty' />}
        </div>

        <h1><FormattedMessage id='home.watch' /></h1>
        <div className="home-list">
          {loginState.watchLater ?
            <TileList dataRef={loginState.watchLater} delBtn={true} showPages={false} isSearch={false} category="" list="watchLater" />
            : <FormattedMessage id='home.empty' />}
        </div>

        <h1><FormattedMessage id='home.recomm' /></h1>
        <div className="home-list">
          {loginState.recomm ?
            <TileList dataRef={loginState.recomm} delBtn={true} showPages={false} isSearch={false} category="" list="recomm" />
            : <FormattedMessage id='home.empty' />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  loginState: store.loginReducer,
  dataState: store.dataReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  syncHomeListDispatch: () => {
    dispatch(syncHomeListAct())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
