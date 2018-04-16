'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";

class Loader extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const { uiState } = this.props;

    return (
      uiState.loader && <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  // dataState: store.dataReducer,
  uiState: store.uiReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  // editDetailsDispatch: (status: boolean) => {
  //   dispatch(toggleEditDetailsAct(status))
  // },
  // saveDetailsDispatch: (values: any) => {
  //   dispatch(saveDetailsAct(values))
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
