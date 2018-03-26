'use strict';

import * as React from 'react';
import * as jq from 'jquery';

export default class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { email: 'keyword' }
  }

  componentDidMount() {
    jq(document).on("keydown", (e) => {
      if (e.which === 27) {
        jq('#search-input').blur();
      }

      if (e.ctrlKey && (e.which === 70)) {
        e.preventDefault();
        jq('#search-input').focus();
        jq('#search-input').select();
      }
    });
  }

  handleChange(e: any) {
  }

  render() {
    return (
      <div id="search">
        <div id="search-box">
          {/* <img src="ui/images/nav/ic_search_white_24px.svg" /> */}
          <input autoFocus id="search-input" type="text" placeholder="Search" value={this.state.keyword}
            onChange={(e) => this.handleChange(e)} onKeyDown={(e) => this.handleChange(e)} />
        </div>
      </div>
    )
  }
}