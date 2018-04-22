'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import lang from '../../i18n/languages';
import { searchAct } from '../../actions/searchActions';

class Search extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { criteria: true };
  }
  
  placeholderTxt() {
    return lang[this.props.uiState.locale]['search.txt']
  }

  toggleCriteria() {
    this.setState({ criteria: !this.state.criteria })
  }

  handleChange(e: any) {
    if (e.which === 13) {
      this.props.searchDispatch(e.target.value)
    }
  }

  render() {
    return (
      <div className="search">
        <div className="search-box">
          <input autoFocus className="search-input" type="text" placeholder={this.placeholderTxt()} value={this.state.keyword}
            onChange={(e) => this.handleChange(e)} onKeyDown={(e) => this.handleChange(e)} />
          <div className="mag"></div>
          <div className="arrow" onClick={e => this.toggleCriteria()}></div>
        </div>
        <div className={'criteria ' + (this.state.criteria && 'criteria-hide')}></div>
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  uiState: store.uiReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  searchDispatch: (key: string) => {
    dispatch(searchAct(key))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
