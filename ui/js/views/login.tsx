'use strict';

import axios from 'axios';

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAct } from '../actions/loginActions';
import { TOGGLE_LOADER } from '../actions/uiActions';

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { form: { email: 'leon@gmail.coms', pwd: 'leon@gmail.com' } }

    // Global Axios response interceptor
    axios.interceptors.response.use(null, err => {
      console.log(err);

      // For handling cookie expiration
      if (err.response.status === 401 || err.response.status === 403) { // Not authorized
        location.hash = '';
      }
      if (err.response.status === 406) { // Email not found / Email or password wrong
        console.log('--', 123);
        
        // console.log(err.response);

        this.props.loaderDispatch(err.response.data.data);
      }
    });
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
          <Link to="register">Sign me up!</Link>
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
  },
  loaderDispatch: (txt: string) => {
    dispatch({ type: TOGGLE_LOADER, status: true, loading: false, loaderTxt: txt });
    // alert(txt);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
