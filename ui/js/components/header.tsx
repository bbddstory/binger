'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <nav className="header">
        <a className="navbar-brand" title="About">
          <img src="ui/images/login/brand.png" width="200px" />
        </a>
        <div className="nav-opts">
          <Link to="/main/home" className="id-nav-opt navbar-brand" title="Home">
            <img src="ui/images/header/ic_home_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Home" />
          </Link>
          <a className="id-nav-opt navbar-brand rightmost-opt" title="Notifications">
            <img src="ui/images/header/ic_notifications_none_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Notifications" />
          </a>
          <a className="id-nav-opt navbar-brand" title="Messages">
            <img src="ui/images/header/ic_message_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Messages" />
          </a>
          <a className="id-nav-opt navbar-brand rightmost-opt" title="Me">
            <img src="ui/images/header/ic_account_circle_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Me" />
          </a>
        </div>
      </nav>
    )
  }
}