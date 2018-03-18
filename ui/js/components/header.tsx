'use strict';

import * as React from 'react';

export default class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <nav className="header">
        <a className="navbar-brand" title="About">
          <img src="ui/images/cat/brand.png" width="200px" />
        </a>
        <div className="nav-opts">
          <a className="id-nav-opt navbar-brand" title="Watch Later">
            <img src="ui/images/nav/ic_watch_later_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Watch Later" />
          </a>
          <a className="id-nav-opt navbar-brand" title="Recommendations">
            <img src="ui/images/nav/ic_favorite_border_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Recommendatiosn" />
          </a>
          <a className="id-nav-opt navbar-brand rightmost-opt" title="Notifications">
            <img src="ui/images/nav/ic_notifications_none_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Notifications" />
          </a>
          <a className="id-nav-opt navbar-brand rightmost-opt" title="Me">
            <img src="ui/images/nav/ic_account_circle_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Me" />
          </a>
        </div>
      </nav>
    )
  }
}