'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { switchCatAct } from '../actions/categoriesActions';
import vTypes from '../util/vTypes';

class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <nav className="header">
        <Link to="/main/home" className="logo" title="Phantom"></Link>
        <div className="nav-opts">
          <Link to="/main/home" className="opt-home" title="Home" onClick={e => this.props.switchCatDispatch(vTypes.HOME)}></Link>
          <Link to="/main/add" className="opt-add" title="Add video"></Link>
          <Link to="/main/notices" className="opt-notice" title="Notifications"></Link>
          <Link to="/main/messages" className="opt-msg" title="Messages"></Link>
          <Link to="/main/me" className="opt-me" title="Me"></Link>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (store: any) => ({
  // dataState: store.dataReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  switchCatDispatch: (cat: string) => {
    dispatch(switchCatAct(cat))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);