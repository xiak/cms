import React, { PureComponent } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import RichControls from './RichControls';
import classNames from 'classnames';
import styles from './RichTextEditor.less';

export default class RichTextEditor extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});

    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
    this.onTab = (e) => this._onTab(e);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
  }
  _handleKeyCommand(command) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }
  _onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }
  render() {
    const { editorState } = this.state;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let editorStyles = styles.RichEditor;
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        editorStyles = classNames(styles.RichEditor, styles.RichEditorHidePlaceHolder);
      }
    }

    return (
      <div className={styles.Rich}>
        <RichControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
          onInlineToggle={this.toggleInlineStyle}
        />
        <div className={editorStyles} onClick={this.focus}>
          <Editor
            spellCheck
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            placeholder="开始创作吧......"
            ref="editor"
          />
        </div>
      </div>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return styles.BlockQuote;
    default: return null;
  }
}

// render() {
//   const { contents, route } = this.props;
//   return (
//     <div className={styles.contentMain}>
//       {
//         contents.map((content) => {
//           return (
//             <ArticleCard
//               route={route + content.id}
//               key={content.id}
//               catagory="sdds"
//               author={content.author}
//               article={content.article}
//             />
//           );
//         })
//       }
//     </div>
//   );
// }

