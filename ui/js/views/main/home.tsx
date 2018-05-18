'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";

import { loadHomeListsAct } from '../../actions/homeActions';
import LatestDetails from './latestDetails';
import TileList from './tileList';
import SlidesList from './slidesList';

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.loadHomeListsDispatch()
  }

  render() {
    const { dataState } = this.props;

    return (
      <div className="home">
        <div className="home-section">
          <div className="latest">
            <h1><FormattedMessage id='home.latest' /></h1>
            <div className="latest-details-wrap">
              <LatestDetails />
            </div>
            <div className="latest-list">
              {Object.keys(dataState.latest).length ?
                <SlidesList dataRef={dataState.latest} outLink={false} vertical={false} delBtn={false} showInfo={false} showDots={true} category="" list="latest" ipp="6" />
                : <FormattedMessage id='home.empty' />}
            </div>
          </div>
          <div className="watch-later">
            <h1><FormattedMessage id='home.watch' /></h1>
            {Object.keys(dataState.watchLater).length ?
              <SlidesList dataRef={dataState.watchLater} outLink={false} vertical={true} delBtn={true} showInfo={true} showDots={true} category="" list="watchLater" ipp="4" />
              : <FormattedMessage id='home.empty' />}
          </div>
        </div>

        {/* <h1><FormattedMessage id='home.watch' /></h1>
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
        </div> */}
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
