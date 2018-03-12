import '../css/root.scss';

import * as React from 'react';
import DraftEditor from './playthings/draft-js';

export default class Sandbox extends React.Component<any, any> {
  render() {
    return (
      <div id="sandbox">
        <DraftEditor />
        <div className="sandbox-lbl">DraftEditor</div>
      </div>
    )
  }
}