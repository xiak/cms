import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'dva/router';
import ArticleList from '../Article/ArticleList';
import NavList from '../Nav/NavList';
import styles from './Layout.less';

export default class MainContent extends PureComponent {
  render() {
    const { contents } = this.props;
    return (
      <main id="mainContent" className={styles.main}>
        <div className={styles.webContent}>
          <ArticleList contents={contents} route="/article/" />
          <NavList />
        </div>
      </main>
    );
  }
}

MainContent.propTypes = {
  contents: PropTypes.array.isRequired,
}

