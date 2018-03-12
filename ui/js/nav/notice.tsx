import '../../css/root.scss';

import * as React from 'react';
import { connect } from 'react-redux';
import { toggleNavOpt } from '../actions/navActions';

class Notice extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps: any) {
  }

  render() {
    return (
      <div className="id-nav-opt card" style={{ display: this.props.show.notice }}>
        <div className="id-nav-opt card-body">
          <h5 className="id-nav-opt card-title">Notification</h5>
          <div className="filter"></div>
          <div className="modal-body notice-modal-body">
            <a className="notice-item _notice-new">
              <img src="ui/images/notice/clover_leaf.svg" />
              <div>
                <h6>Draft.js</h6>
                <p>This is my own ReactJS backyard. It is a place for studying, experimenting and showcasing the latest and greatest of this framework and more.</p>
              </div>
            </a>
            <a className="notice-item _notice-new">
              <img src="ui/images/notice/clover_leaf.svg" />
              <div>
                <h6>Draft.js</h6>
                <p>This is my own ReactJS backyard. It is a place for studying, experimenting and showcasing the latest and greatest of this framework and more.</p>
              </div>
            </a>
            <a className="notice-item _notice-new">
              <img src="ui/images/notice/clover_leaf.svg" />
              <div>
                <h6>Draft.js</h6>
                <p>This is my own ReactJS backyard. It is a place for studying, experimenting and showcasing the latest and greatest of this framework and more.</p>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Notice);