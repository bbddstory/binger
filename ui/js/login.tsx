import '../css/root.scss';

import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { toggleNavOpt } from './actions/navActions';

import About from './nav/about';
import Apps from './nav/apps';
import Notice from './nav/notice';
import Me from './nav/me';

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
    // this.windowClick = this.windowClick.bind(this);
  }

  toggleOpt(optName: string) {
    this.props.toggleNavOpt(optName)
    //   try {
    //     ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.refs.about))
    //   } catch (e) {
    //     console.error(e)
    //   }
  }

  // windowClick(e: any) {
  //   e.preventDefault();
  //   if (!e.target.classList.contains('id-nav-opt'))
  //     this.props.toggleNavOpt();
  // }

  componentDidMount() {
    // if (window)
    //   window.addEventListener('click', this.windowClick, false)
  }

  componentWillUnmount() {
    // window.removeEventListener('click', this.windowClick, false)
  }

  handleSubmit(e: any) {
    if(e.keyCode === 13){
      console.log(e.keyCode);
      e.preventDefault();
    }
  }

  render() {
    return (
        <form className="login-form" onSubmit={(e) => this.handleSubmit(e)}>
            <img src="ui/images/login/lamp_head.png" width="102" height="115" className="login-brand" />
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" value={this.state.email} 
                  onKeyDown={(e) => this.handleSubmit(e)}/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" value={this.state.password}
                  onKeyDown={(e) => this.handleSubmit(e)}/>
            </div>
        </form>
    )
  }
}

const mapStateToProps = (state: any) => ({
  show: state.toggleNavOpt
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleNavOpt: (optName: any) => {
    dispatch(toggleNavOpt(optName))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
