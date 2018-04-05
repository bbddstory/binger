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
        <Link to="/main/home" className="navbar-brand" title="Home">
          <img src="ui/images/login/brand.png" width="200px" />
        </Link>
        <div className="nav-opts">
          <a className="id-nav-opt navbar-brand" title="Add video">
            <img src="ui/images/header/ic_library_add_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Home" />
          </a>
          <a className="id-nav-opt navbar-brand" title="Notifications">
            <img src="ui/images/header/ic_notifications_none_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Notifications" />
          </a>
          <a className="id-nav-opt navbar-brand" title="Messages">
            <img src="ui/images/header/ic_message_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Messages" />
          </a>
          <a className="id-nav-opt navbar-brand" title="Me">
            <img src="ui/images/header/ic_account_circle_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Me" />
          </a>
        </div>
      </nav>
    )
  }
}