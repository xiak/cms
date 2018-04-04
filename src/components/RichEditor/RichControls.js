import React, { PureComponent } from 'react';
import ControlButton from './ControlButton';
import styles from './RichControls.less';

const BLOCK_CONTROLS = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
];

const INLINE_CONTROLS = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

export default class RichControls extends PureComponent {
  render() {
    const { editorState, onToggle, onInlineToggle } = this.props;
    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();
    const currentStyle = editorState.getCurrentInlineStyle();
    return (
      <div className="RichControlList">
        <div className="RichControls">
          {
            BLOCK_CONTROLS.map((type) => {
              return (
                <ControlButton
                  key={type.label}
                  active={type.style === blockType}
                  label={type.label}
                  onToggle={onToggle}
                  style={type.style}
                />
              );
            })
          }
        </div>
        <div className="RichControls">
          {
            INLINE_CONTROLS.map((type) => {
              return (
                <ControlButton
                  key={type.label}
                  active={currentStyle.has(type.style)}
                  label={type.label}
                  onToggle={onInlineToggle}
                  style={type.style}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}
