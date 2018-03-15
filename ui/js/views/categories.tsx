import '../../css/root.scss';

import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/header';
import Search from '../components/search';
import Breadcrumb from '../components/breadcrumb';
import Folders from '../components/folders';
import Thumbs from '../components/thumbs';
import Footer from '../components/footer';

class Categories extends React.Component<any, any> {
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

  componentWillUpdate(prevProps: any, prevState: any) {
    console.log('-- CB from reducer', prevProps);
    console.log('-- CB from reducer', prevState);

    console.log('-- CB from reducer', this.props);
    console.log('-- CB from reducer', this.state);
  }

  render() {
    return (
      <div>
        <Header />
        <Search />
        <Breadcrumb />
        <Switch>
          <Route exact path='/categories' component={Folders} />
          <Route path='/categories/animations' component={Thumbs} />
          <Route path='/categories/documentaries' component={Thumbs} />
          <Route path='/categories/movies' component={Thumbs} />
          <Route path='/categories/tv' component={Thumbs} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  loginState: state.login
});

const mapDispatchToProps = (dispatch: any) => ({
  loginDispath: (email: string, pwd: string) => {
    // dispatch(loginAct(email, pwd))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
