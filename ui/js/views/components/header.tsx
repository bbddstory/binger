'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { switchCatAct } from '../../actions/categoriesActions';
import cats from '../../util/cats';

class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <nav className="header">
        <a target="_blank" href="http://10.0.0.1:5000" className="logo" title="Phantom"></a>
        <div className="nav-opts">
          <Link to="/main/home" className="opt-home" title="Home" onClick={e => this.props.switchCatDispatch(cats.HOME)}></Link>
          <Link to="/main/add" className="opt-add" title="Add video"></Link>
          <Link to="/main/notices" className="opt-notice" title="Notifications"></Link>
          <Link to="/main/messages" className="opt-msg" title="Messages"></Link>
          <Link to="/main/me" className="opt-me" title="Me">{this.props.loginState.nickname}</Link>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (store: any) => ({
  loginState: store.loginReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  switchCatDispatch: (cat: string) => {
    dispatch(switchCatAct(cat))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);