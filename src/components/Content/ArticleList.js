import React, { PureComponent } from 'react';
import ArticleCard from '../Card/ArticleCard';
import styles from './ArticleList.less'

export default class ArticleList extends PureComponent {
  render() {
    const { contents } = this.props;
    return (
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
    )
  }
}
