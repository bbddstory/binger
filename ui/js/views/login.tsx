'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { loginAct } from '../actions/loginActions';

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { email: 'bbddstory@gmail.com', pwd: 'LEON314@firebase' }
  }

  handleChange(e: any) {
    if (e.keyCode === 13) {
      this.props.loginDispath(this.state.email, this.state.pwd)
    } else {
      if (e.target.type === 'email') {
        this.setState({ email: e.target.value })
      } else {
        this.setState({ pwd: e.target.value })
      }
    }
  }

  render() {
    return (
      <form className="login-form">
        <img src="ui/images/login/binger.png" width="256" height="77" />
        <input autoFocus type="email" placeholder="Email" value={this.state.email}
          onChange={(e) => this.handleChange(e)} onKeyDown={(e) => this.handleChange(e)} />
        <input type="password" placeholder="Password" value={this.state.pwd}
          onChange={(e) => this.handleChange(e)} onKeyDown={(e) => this.handleChange(e)} />
      </form>
    )
  }
}

// Here state is the masterStore defined in index.tsx
const mapStateToProps = (state: any) => ({
  loginState: state.loginReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  loginDispath: (email: string, pwd: string) => {
    dispatch(loginAct(email, pwd))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
