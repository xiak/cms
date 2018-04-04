import React, { PureComponent } from 'react';
import RichEditorCard from '../Card/RichEditorCard';
import styles from './Layout.less';

export default class EditorContent extends PureComponent {
  render() {
    return (
      <main id="editorContent" className={styles.main}>
        <div className={styles.webContent}>
          <RichEditorCard />
        </div>
      </main>
    );
  }
}

