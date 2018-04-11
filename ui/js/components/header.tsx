'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategoryAct } from '../actions/categoriesActions';
import vTypes from '../util/vTypes';

class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  setCat(cat: string) {
    this.props.setCatDispatch(cat)
  }

  render() {
    return (
      <nav className="header">
        <Link to="/main/home" className="navbar-brand" title="Phantom">
          <img src="images/login/brand.png" width="200px" alt="Phantom" />
        </Link>
        <div className="nav-opts">
          <Link to="/main/home" className="id-nav-opt" title="Home" onClick={e => this.setCat(vTypes.HOME)}>
            <img src="images/header/ic_home_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Home" />
          </Link>
          <a className="id-nav-opt navbar-brand" title="Add video">
            <img src="images/header/ic_library_add_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Add video" />
          </a>
          <a className="id-nav-opt navbar-brand" title="Notifications">
            <img src="images/header/ic_notifications_none_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Notifications" />
          </a>
          <a className="id-nav-opt navbar-brand" title="Messages">
            <img src="images/header/ic_message_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Messages" />
          </a>
          <a className="id-nav-opt navbar-brand" title="Me">
            <img src="images/header/ic_account_circle_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Me" />
          </a>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (store: any) => ({
  // dataState: store.dataReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  setCatDispatch: (cat: string) => {
    dispatch(setCategoryAct(cat))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);