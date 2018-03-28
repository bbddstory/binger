'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { loginAct } from '../../actions/loginActions';
import { FormattedMessage } from "react-intl";

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="home">
        <h3><FormattedMessage id='home.watch' /></h3>
        <div className="my-list empty">
          <FormattedMessage id='home.empty' />
        </div>
        <h3><FormattedMessage id='home.recomm' /></h3>
        <div className="my-list empty">
          <FormattedMessage id='home.empty' />
        </div>
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
