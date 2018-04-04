import React, { PureComponent } from 'react';
import styles from './ControlButton.less';

export default class StyleButton extends PureComponent {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={styles.CtrlButton} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}
