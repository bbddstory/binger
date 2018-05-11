'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";

import { loadHomeListsAct } from '../../actions/homeActions';
import TileList from './tileList';

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    this.props.loadHomeListsDispatch()
  }

  render() {
    const { dataState } = this.props;

    return (
      <div className="home">
        <h1><FormattedMessage id='home.latest' /></h1>
        <div className="home-list">
          {Object.keys(dataState.latest).length ?
            <TileList dataRef={dataState.latest} delBtn={false} showPages={false} category="" list="latest" />
            : <FormattedMessage id='home.empty' />}
        </div>

        <h1><FormattedMessage id='home.watch' /></h1>
        <div className="home-list">
          {Object.keys(dataState.watchLater).length ?
            <TileList dataRef={dataState.watchLater} delBtn={true} showPages={false} category="" list="watchLater" />
            : <FormattedMessage id='home.empty' />}
        </div>

        <h1><FormattedMessage id='home.recomm' /></h1>
        <div className="home-list">
          {Object.keys(dataState.recomm).length ?
            <TileList dataRef={dataState.recomm} delBtn={true} showPages={false} category="" list="recomm" />
            : <FormattedMessage id='home.empty' />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  dataState: store.dataReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  loadHomeListsDispatch: () => {
    dispatch(loadHomeListsAct())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
