'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { loginAct } from '../actions/loginActions';

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { email: 'bbddstory@gmail.com', pwd: 'LEON314@firebase' }
  }

  handleChange(e: any) {
    if (e.keyCode === 13) {
      this.props.loginDispatch(this.state.email, this.state.pwd)
    } else {
      if (e.target.type === 'email') {
        this.setState({ email: e.target.value })
      } else {
        this.setState({ pwd: e.target.value })
      }
    }
  }

  componentDidMount() {
    document.body.className = '';
  }

  render() {
    return (
      <form className="login-form">
        <img src="images/login/brand.png" width="287" />
        <input autoFocus type="email" placeholder="Email" value={this.state.email}
          onChange={e => this.handleChange(e)} onKeyDown={e => this.handleChange(e)} />
        <input type="password" placeholder="Password" value={this.state.pwd}
          onChange={e => this.handleChange(e)} onKeyDown={e => this.handleChange(e)} />
      </form>
    )
  }
}

// Here store is the masterStore defined in index.tsx
const mapStateToProps = (store: any) => ({
  // loginState: store.loginReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  loginDispatch: (email: string, pwd: string) => {
    dispatch(loginAct(email, pwd))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
