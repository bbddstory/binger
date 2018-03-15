import '../css/root.scss';

import * as React from 'react';
import { connect } from 'react-redux';
import { loginAct } from './actions/loginActions';

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { email: 'bbddstory@gmail.com', pwd: 'LEON314@firebase'}
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

  componentWillUpdate(prevProps: any, prevState: any) {
    console.log('-- CB from reducer', prevProps);
    console.log('-- CB from reducer', prevState);

    console.log('-- CB from reducer', this.props);
    console.log('-- CB from reducer', this.state);
  }

  render() {
    return (
      <form className="login-form">
        <img src="ui/images/login/lamp_head.png" width="102" height="115" className="login-brand" />
        <div className="form-group">
          <input autoFocus type="email" className="form-control" placeholder="Email" value={this.state.email}
            onChange={(e) => this.handleChange(e)} onKeyDown={(e) => this.handleChange(e)} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" value={this.state.pwd}
            onChange={(e) => this.handleChange(e)} onKeyDown={(e) => this.handleChange(e)} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" value={this.props.loginState.email} />
        </div>
      </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
