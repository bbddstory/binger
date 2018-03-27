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
          <input autoFocus id="search-input" type="text" placeholder="Search" value={this.state.keyword}
            onChange={(e) => this.handleChange(e)} onKeyDown={(e) => this.handleChange(e)} />
          <img className="mag" src="ui/images/search/ic_search_black_24px.svg" />
          <img className="arrow" src="ui/images/search/ic_keyboard_arrow_down_black_24px.svg" />
        </div>
      </div>
    )
  }
}