'use strict';

import * as jq from 'jquery';
import * as React from 'react';
import { FormattedMessage } from "react-intl";

export default class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { txt: 'Search' }
  }

  componentDidMount() {
    jq(document).on('keydown', e => {
      if (e.which === 27) {
        jq('.search-input').blur();
      }

      if (e.ctrlKey && (e.which === 70)) {
        e.preventDefault();
        jq('.search-input').focus();
        jq('.search-input').select();
      }
    });
  }

  handleChange(e: any) {
  }

  render() {
    return (
      <div className="search">
        <div className="search-box">
          <input autoFocus className="search-input" type="text" placeholder={this.state.txt} value={this.state.keyword}
            onChange={(e) => this.handleChange(e)} onKeyDown={(e) => this.handleChange(e)} />
          <img className="mag" src="ui/images/search/ic_search_black_24px.svg" />
          <img className="arrow" src="ui/images/search/ic_keyboard_arrow_down_black_24px.svg" />
        </div>
      </div>
    )
  }
}