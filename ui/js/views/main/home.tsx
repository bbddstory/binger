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
    const { loginState } = this.props;
    const { dataState } = this.props;
  
    this.props.syncHomeListDispatch();

    // if ((dataState.buffer && Object.keys(dataState.buffer).length === 0
    //   && loginState.latest && Object.keys(this.props.loginState.latest).length > 0)
    //   || dataState.prevCat !== dataState.category) {
    //   this.props.syncHomeListDispatch()
    // }
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
            <TileList dataRef={loginState.latest} delBtn={false} showPages={false} isSearch={false} category="" />
            : <FormattedMessage id='home.empty' />}
        </div>

        <h1><FormattedMessage id='home.watch' /></h1>
        <div className="home-list">
          {loginState.watchlater ?
            <TileList dataRef={loginState.watchlater} delBtn={true} showPages={false} isSearch={false} category="" />
            : <FormattedMessage id='home.empty' />}
        </div>

        <h1><FormattedMessage id='home.recomm' /></h1>
        <div className="home-list">
          {loginState.recomm ?
            <TileList dataRef={loginState.recomm} delBtn={true} showPages={false} isSearch={false} category="" />
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
