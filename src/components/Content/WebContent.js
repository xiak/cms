import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'dva/router';
import ArticleList from './ArticleList';
import NavList from './NavList';
import styles from './WebContent.less';

export default class WebContent extends PureComponent {
  render() {
    const { contents } = this.props;
    return (
      <main id="webContent" className={styles.main}>
        <div className={styles.webContent}>
          <ArticleList contents={contents}/>
          <NavList />
        </div>
      </main>
    );
  }
}

WebContent.propTypes = {
  contents: PropTypes.array.isRequired,
}

