import '../../css/root.scss';

import * as React from 'react';

export default class About extends React.Component<any, any> {
  componentWillUnmount() {
    this.props.unmountMe()
  }

  render() {
    return (
      <div className="modal fade" id="aboutModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">About</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src="ui/images/playground.gif" className="about-logo" width="410" height="87" title="I'm getting bored..." />
              <p className="intro">
                This is my own ReactJS backyard. It is a place for studying, experimenting and showcasing the latest and greatest of this framework and more.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal">Got it</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}