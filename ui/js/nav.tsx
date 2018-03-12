import '../css/root.scss';

import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { toggleNavOpt } from './actions/navActions';

import About from './nav/about';
import Apps from './nav/apps';
import Notice from './nav/notice';
import Me from './nav/me';

class Nav extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.windowClick = this.windowClick.bind(this);
  }

  toggleOpt(optName: string) {
    this.props.toggleNavOpt(optName)
    //   try {
    //     ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.refs.about))
    //   } catch (e) {
    //     console.error(e)
    //   }
  }

  windowClick(e: any) {
    e.preventDefault();
    if (!e.target.classList.contains('id-nav-opt'))
      this.props.toggleNavOpt();
  }

  componentDidMount() {
    if (window)
      window.addEventListener('click', this.windowClick, false)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.windowClick, false)
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <About ref="about" />
        <Apps />
        <Notice />
        <Me />
        <a className="navbar-brand" title="About" data-toggle="modal" data-target="#aboutModal">
          <img src="ui/images/nav/brand.png" width="30" height="30" className="d-inline-block align-top" />
          <span className="brand-txt">Playground</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarColor01">
          <a className="id-nav-opt navbar-brand" title="Playthings" onClick={() => this.toggleOpt('apps')}>
            <img src="ui/images/nav/dice.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Playthings" />
          </a>
          <a className="id-nav-opt navbar-brand" title="Notification" onClick={() => this.toggleOpt('notice')}>
            <img src="ui/images/nav/cctv.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Notification" />
          </a>
          <a className="id-nav-opt navbar-brand rightmost-opt" title="Me" onClick={() => this.toggleOpt('me')}>
            <img src="ui/images/nav/berry.svg" width="30" height="30" className="id-nav-opt d-inline-block align-top" alt="Me" />
          </a>
        </div>
      </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
