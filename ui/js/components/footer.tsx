'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { email: 'keyword' }
  }

  handleChange(e: any) {
  }

  render() {
    return (
      <div className="footer">
        <ol>
          <li><Link to="/main/nas">PhantomZone on NAS</Link></li>
          <li><Link to="/main/about">About</Link></li>
          <li><Link to="/main/help">Help</Link></li>
          <li><Link to="/main/feedback">Give feedback</Link></li>
          <li><Link to="/main/language">Language</Link></li>
        </ol>
      </div>
    )
  }
}