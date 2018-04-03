import React from 'react';
import { Editor, EditorState } from 'draft-js';
import styles from './PostEditor.less';

export default class PostEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    }
    this.onChange = (editorState) => {
      console.info(editorState);
      this.setState({editorState});
    }
    this.onEnter = () => this._onEnter();
  }

  _onEnter(e) {
    var editor = this.state.editorState
    // 得到当前ContentState对象
    var content = this.state.editorState.getCurrentContent()
    var prevKey = editor.getSelection().getStartKey()
    // 判断当前内容块是否为空
    if(content.getBlockForKey(prevKey).getText() == ""){
      // 重绘编辑器
      this.setState({editorState:this.jumpOut(editor)})
      // 阻止默认行为
      return "handled";
    }
  }

  render() {
    const { editorState } = this.state;
    const contentState = editorState.getCurrentContent();
    return (
      <div className={styles.PostEditor}>
        <div className="RichEditorControlls">
          <span className="RichEditorControll">
            <button>粗体</button>
          </span>
          <span className="RichEditorControll">
            <button>斜体</button>
          </span>
          <span className="RichEditorControll">
            <button>标题</button>
          </span>
          <span className="RichEditorControll">
            <button>引用</button>
          </span>
        </div>
        <div className="RichEditor" onClick={this.focus}>
          <Editor
            editorState={editorState}
            onChange={this.onChange}
            placeholder="Tell a story..."
            ref="editor"
            stripPastedStyles={true}
          />
        </div>
      </div>
    );
  }
}
