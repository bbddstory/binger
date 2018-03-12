import '../../css/root.scss';

import * as React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleNavOpt } from '../actions/navActions';

class Apps extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  
  componentWillReceiveProps(nextProps: any) {
  }

  render() {
    return (
      <div className="id-nav-opt card" style={{ display: this.props.show.apps }}>
        <div className="id-nav-opt card-body">
          <h5 className="id-nav-opt card-title">Playthings</h5>
          <div className="modal-body apps-modal-body">
            <a className="apps-item" data-toggle="modal" data-target="#appsModal">
              <img src="ui/images/apps/clover_leaf.svg" width="50" height="50" className="d-inline-block align-top" />
              Draft.js
            </a>
            <a className="apps-item" data-toggle="modal" data-target="#appsModal">
              <img src="ui/images/apps/heart.svg" width="50" height="50" className="d-inline-block align-top" />
              Socket.IO
            </a>
            <a className="apps-item" data-toggle="modal" data-target="#appsModal">
              <img src="ui/images/apps/roller_skate.svg" width="50" height="50" className="d-inline-block align-top" />
              Paper.js
            </a>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  show: state.toggleNavOpt
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleNavOpt: (optName: any) => {
    dispatch(toggleNavOpt(optName))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Apps);
