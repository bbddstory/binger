import '../../css/root.scss';

import * as React from 'react';
import { Editor, EditorState } from 'draft-js';

export default class DraftEditor extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onChange = (editorState: any) => {
    this.setState({ editorState })
  }

  render() {
    return (
      <Editor editorState={this.state.editorState} onChange={this.onChange} />
    )
  }
}