import '../../css/root.scss';

import * as React from 'react';
import { connect } from 'react-redux';
import { toggleNavOpt } from '../actions/navActions';

class Me extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps: any) {
  }

  render() {
    return (
      <div className="id-nav-opt card" style={{ display: this.props.show.me }}>
        <div className="id-nav-opt card-body">
          <h5 className="id-nav-opt card-title">Me</h5>
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

export default connect(mapStateToProps, mapDispatchToProps)(Me);