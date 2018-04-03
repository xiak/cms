import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import classNames from 'classnames';
import styles from './NavListCard.less';
import comStyles from '../Common/mixins.less';

export default class NavLListCard extends PureComponent {
  render() {
    return (
      <div
        className={classNames(comStyles.small, comStyles.Card)}
      >
        <ul className={styles.navlist}>
          <li>
            <a className={classNames(comStyles.Button, styles.navLink)}>
              <Icon type="star" className={styles.cataItem} />
              <span className={styles.navText}>我的收藏</span>
            </a>
          </li>
          <li>
            <a className={classNames(comStyles.Button, styles.navLink)}>
              <Icon type="question-circle" className={styles.cataItem} />
              <span className={styles.navText}>我的关注</span>
            </a>
          </li>
          <li>
            <a className={classNames(comStyles.Button, styles.navLink)}>
              <Icon type="pay-circle" className={styles.cataItem} />
              <span className={styles.navText}>我的收藏</span>
            </a>
          </li>
          <li>
            <a className={classNames(comStyles.Button, styles.navLink)}>
              <Icon type="pay-circle" className={styles.cataItem} />
              <span className={styles.navText}>我的收藏</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
