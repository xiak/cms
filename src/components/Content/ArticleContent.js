import React, { PureComponent } from 'react';
import RichTextEditor from '../RichEditor/RichTextEditor';
import styles from './Layout.less';

export default class ArticleContent extends PureComponent {
  render() {
    return (
      <main id="articleContent" className={styles.main}>
        <div className={styles.webContent}>
          <RichTextEditor />
        </div>
      </main>
    );
  }
}

