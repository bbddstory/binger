'use strict';

import '../../css/root.scss';

import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAct } from '../actions/loginActions';

class Folders extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { email: 'bbddstory@gmail.com', pwd: 'LEON314@firebase' }
  }

  handleChange(e: any) {
    if (e.keyCode === 13) {
      // console.log(this.state);
      // console.log('-- info: ', this.props.loginState);

      this.props.loginDispath(this.state.email, this.state.pwd)
    } else {
      if (e.target.type === 'email') {
        this.setState({ email: e.target.value })
      } else {
        this.setState({ pwd: e.target.value })
      }
    }
  }

  handleClick(hash: string) {
    let url = window.location.hash,
        lastChar = url.substring(url.length - 1);
    
    if(lastChar === '/') {
      window.location.hash = url + hash;
    } else {
      window.location.hash = url + '/' + hash;
    }
  }

  componentWillUpdate(prevProps: any, prevState: any) {
    console.log('-- CB from reducer', prevProps);
    console.log('-- CB from reducer', prevState);

    console.log('-- CB from reducer', this.props);
    console.log('-- CB from reducer', this.state);
  }

  render() {
    return (
      <div className="folders">
        <div className="cat-row">
          <div className="category movies" onClick={(e) => this.handleClick('movies')}></div>
          <div className="category tv" onClick={(e) => this.handleClick('tv')}></div>
        </div>
        <div className="cat-row">
          <div className="category docs" onClick={(e) => this.handleClick('docs')}></div>
          <div className="category anime" onClick={(e) => this.handleClick('anime')}></div>
        </div>
        <div className="cat-row">
          <div className="category xxx" onClick={(e) => this.handleClick('xxx')}></div>
          <div className="category ero" onClick={(e) => this.handleClick('ero')}></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  loginState: state.login
});

const mapDispatchToProps = (dispatch: any) => ({
  loginDispath: (email: string, pwd: string) => {
    dispatch(loginAct(email, pwd))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Folders);