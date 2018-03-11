import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'dva/router';
import ArticleCard from '../Card/ArticleCard';
import CatagoryCard from '../Card/CatagoryCard';
import NavLListCard from '../Card/NavLListCard';
import styles from './WebContent.less';
import comStyles from '../Common/mixins.less';

export default class WebContent extends PureComponent {
  render() {
    const { contents } = this.props;
    return (
      <main id="webContent" className={styles.main}>
        <div className={styles.webContent}>
          <div className={styles.contentMain}>
            {
              contents.map((content) => {
                return (
                  <ArticleCard
                    key={content.id}
                    catagory="sdds"
                    author={content.author}
                    article={content.article}
                  />
                );
              })
            }
          </div>
          <div className={styles.contentSider}>
            <div className={comStyles.fixed}>
              <CatagoryCard />
              <NavLListCard />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

WebContent.propTypes = {
  contents: PropTypes.array.isRequired,
}

