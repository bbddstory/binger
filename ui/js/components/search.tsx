import '../../css/root.scss';

import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { email: 'keyword' }
  }

  handleChange(e: any) {
  }

  render() {
    return (
      <div className="search">
        {/* <img src="ui/images/nav/ic_search_white_24px.svg" /> */}
        <input autoFocus type="text" className="" placeholder="Search" value={this.state.keyword}
          onChange={(e) => this.handleChange(e)} onKeyDown={(e) => this.handleChange(e)} />
      </div>
    )
  }
}