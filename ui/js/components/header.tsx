import '../../css/root.scss';

import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { email: 'bbddstory@gmail.com', pwd: 'LEON314@firebase' }
  }

  handleChange(e: any) {
  }

  render() {
    return (
      <nav className="header navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" title="About" data-toggle="modal" data-target="#aboutModal">
          <img src="ui/images/login/brand.png" width="200" className="d-inline-block align-top" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarColor01">
          <a className="id-nav-opt navbar-brand" title="Playthings">
            <img src="ui/images/nav/ic_watch_later_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Playthings" />
          </a>
          <a className="id-nav-opt navbar-brand" title="Notification">
            <img src="ui/images/nav/ic_favorite_border_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Notification" />
          </a>
          <a className="id-nav-opt navbar-brand rightmost-opt" title="Me">
            <img src="ui/images/nav/ic_notifications_none_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Me" />
          </a>
          <a className="id-nav-opt navbar-brand rightmost-opt" title="Me">
            <img src="ui/images/nav/ic_account_circle_white_24px.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Me" />
          </a>
        </div>
      </nav>
      // <nav className="header">
      //   {/* <ul className="navbar">
      //     <li><img src="ui/images/icon/ic_account_circle_white_24px.svg" /></li>
      //     <li><img src="ui/images/icon/ic_favorite_border_white_24px.svg" /></li>
      //     <li><img src="ui/images/icon/ic_notifications_none_white_24px.svg" /></li>
      //   </ul> */}
      //   {/* <img className="navbar-brand" src="ui/images/login/brand.png" width="200" /> */}
      //   <a className="navbar-brand" href="#">Logo</a>
      //   <ul className="nav justify-content-end">
      //     <li className="nav-item">
      //       <a className="nav-link" href="#">Link</a>
      //     </li>
      //     <li className="nav-item">
      //       <a className="nav-link" href="#">Link</a>
      //     </li>
      //     <li className="nav-item">
      //       <a className="nav-link" href="#">Link</a>
      //     </li>
      //     <li className="nav-item">
      //       <a className="nav-link disabled" href="#">Disabled</a>
      //     </li>
      //   </ul>
      // </nav>
    )
  }
}