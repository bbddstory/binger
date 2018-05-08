'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { loginAct } from '../actions/loginActions';

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { form: { email: 'leon@g.com', pwd: 'leon@g.com' } }
  }

  handleChange(e: any) {
    if (e.target.name === 'submit') {
      this.props.loginDispatch(this.state.form)
    } else {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value
        }
      })
    }
  }

  componentDidMount() {
    document.body.className = '';
  }

  render() {
    return (
      <form className="login-form">
        <div className="logo"></div>
        <input autoFocus type="email" name="email" placeholder="Email" value={this.state.form.email}
          onChange={e => this.handleChange(e)} onKeyDown={e => this.handleChange(e)} />
        <input type="password" name="pwd" placeholder="Password" value={this.state.form.pwd}
          onChange={e => this.handleChange(e)} onKeyDown={e => this.handleChange(e)} />
        <span className="sign-up">
          <a href="#/register" className="sign-up-link">Sign me up!</a>
        </span>
        <input type="button" name="submit" value="Enter"
          onClick={e => this.handleChange(e)} />
      </form>
    )
  }
}

// Here store is the masterStore defined in index.tsx
const mapStateToProps = (store: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
  loginDispatch: (form: any) => {
    dispatch(loginAct(form))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
