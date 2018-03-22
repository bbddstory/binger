'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { loginAct } from '../../actions/loginActions';

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { email: 'bbddstory@gmail.com', pwd: 'LEON314@firebase' }
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

  render() {
    return (
      <div className="home">
        <h3>Watch Later</h3>
        <h3>Recommendations</h3>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  loginState: state.loginReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  loginDispath: (email: string, pwd: string) => {
    dispatch(loginAct(email, pwd))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
