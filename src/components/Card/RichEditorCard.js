import React, { PureComponent } from 'react';
import { Link } from 'dva/router';
import { Icon } from 'antd';
import classNames from 'classnames';
import RichTextEditor from '../RichEditor/RichTextEditor';
import styles from './RichEditorCard.less';
import comStyles from '../Common/mixins.less';

export default class RichEditorCard extends PureComponent {
  state = {
    like: false,
    collapsed: true,
  }
  onClickContent = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  onClickVote = () => {
    this.setState({
      like: !this.state.like,
    });
  }
  render() {
    return (
      <div className={classNames(comStyles.Card, styles.Rich)}>
        <RichTextEditor />
      </div>
    );
  }
}
