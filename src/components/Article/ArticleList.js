import React, { PureComponent } from 'react';
import ArticleCard from '../Card/ArticleCard';
import styles from './ArticleList.less';

export default class ArticleList extends PureComponent {
  render() {
    const { contents, route } = this.props;
    return (
      <div className={styles.contentMain}>
        {
          contents.map((content) => {
            return (
              <ArticleCard
                route={route + content.id}
                key={content.id}
                catagory="sdds"
                author={content.author}
                article={content.article}
              />
            );
          })
        }
      </div>
    );
  }
}
