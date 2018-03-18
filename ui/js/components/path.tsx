'use strict';

import * as React from 'react';
import { Link } from 'react-router-dom';

export default class path extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  handleChange(e: any) {
  }

  render() {
    return (
      <ol className="path">
        <li><Link to="/main">Categories</Link></li>
        <li><Link to="/main/movies">Movies</Link></li>
        <li className="active">Details</li>
      </ol>
    )
  }
}