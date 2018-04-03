import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'dva/router';
import PostEditor from '../RichEditor/PostEditor';
import styles from './WebContent.less';

export default class WebContent extends PureComponent {
  render() {
    return (
      <main id="webContent" className={styles.main}>
        <div className={styles.webContent}>
          <PostEditor />
        </div>
      </main>
    );
  }
}

WebContent.propTypes = {
  contents: PropTypes.array.isRequired,
}

