'use strict';

import * as jq from 'jquery';
import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import lang from '../../i18n/languages';

class Search extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  
  placeholderTxt() {
    return lang[this.props.localeState.lang]['search.txt']
  }

  componentDidMount() {
    jq(document).on('keydown', e => {
      if (e.which === 27) {
        jq('.search-input').blur();
      }

      if (e.ctrlKey && e.shiftKey && (e.which === 70)) {
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
          <input autoFocus className="search-input" type="text" placeholder={this.placeholderTxt()} value={this.state.keyword}
            onChange={(e) => this.handleChange(e)} onKeyDown={(e) => this.handleChange(e)} />
          <div className="mag"></div>
          <div className="arrow"></div>
          {/* <img className="mag" src="images/search/ic_search_black_24px.svg" /> */}
          {/* <img className="arrow" src="images/search/ic_keyboard_arrow_down_black_24px.svg" /> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  localeState: store.localeReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  // switchLangDispatch: (lang: string) => {
  //   dispatch(switchLangAct(lang))
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
