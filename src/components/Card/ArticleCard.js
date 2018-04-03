import React, { PureComponent } from 'react';
import { Link } from 'dva/router';
import { Icon } from 'antd';
import classNames from 'classnames';
import styles from './ArticleCard.less';
import comStyles from '../Common/mixins.less';

export default class ArticleCard extends PureComponent {
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
    const { catagory, author, article } = this.props;
    let voteStyles = classNames(comStyles.Button, styles.ArticleVoteButton);
    let contentStyles = classNames(styles.ArticleContent);
    if (this.state.like) {
      voteStyles = classNames(comStyles.Button, styles.ArticleVoteButton, styles.isActive);
    }
    if (this.state.collapsed) {
      contentStyles = classNames(styles.ArticleContent, styles.isCollapsed);
    }
    return (
      <div className={classNames(comStyles.Card, styles.Article)}>
        <div>
          <div className={styles.FirstLine}>
            <span className={styles.ComeFrom}>来自:</span>
            <span className={styles.ComeFrom}>
              <a href="/" target="_blank">
                <div className={styles.AurthorAvatar} >
                  {catagory}
                </div>
              </a>
            </span>
          </div>
          <div className={styles.Aurthor}>
            <div className={styles.AurthorAvatar} >
              <a>
                <img className={styles.Avatar} src={author.avatar} alt="" />
              </a>
            </div>
            <div className={styles.AurthorContent}>
              <div className={styles.AurthorHead}>
                <div>
                  <a className={styles.AurthorName}>{author.name}</a>
                </div>
              </div>
              <div className={styles.AurthorInfo}>
                <div className={styles.AuthorInfoBadge}>
                  <div className={classNames(styles.Rich, styles.AurthorInfoBadgeText)}>
                    {author.details}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ArticleTitle}>
            {article.title}
          </div>
          <div
            className={contentStyles}
            onClick={this.onClickContent}
          >
            <div className={styles.ArticleCover}>
              <img src={article.cover} alt="cover" />
            </div>
            <div className={styles.ArticleDetail}>
              <span>
                {article.text}
              </span>
            </div>
          </div>
          <div className={styles.ArticleFooter}>
            <span>
              <div
                className={voteStyles}
                onClick={this.onClickVote}
              >
                <Icon type="like" className={styles.LikeIcon} />{article.favour}
              </div>
            </span>
            <div
              className={classNames(comStyles.Button, styles.ArticleAction)}
              onClick={this.onClickVote}
            >
              <Icon type="message" className={styles.LikeIcon} />{article.commentNum} 条评论
            </div>
            <div
              className={classNames(comStyles.Button, styles.ArticleAction)}
              onClick={this.onClickVote}
            >
              <Icon type="share-alt" className={styles.LikeIcon} />分享
            </div>
            <div
              className={classNames(comStyles.Button, styles.ArticleAction)}
              onClick={this.onClickVote}
            >
              <Icon type="star" className={styles.LikeIcon} />收藏
            </div>
            <div
              className={classNames(comStyles.Button, styles.ArticleAction)}
              onClick={this.onClickVote}
            >
              <Icon type="heart" className={styles.LikeIcon} />感谢
            </div>
          </div>
        </div>
      </div>
    );
  }
}
