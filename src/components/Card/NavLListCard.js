import React, { PureComponent } from 'react';
import { Card, Icon } from 'antd';
import classNames from 'classnames';
import styles from './NavListCard.less';
import comStyles from '../Common/mixins.less';

export default class NavLListCard extends PureComponent {
  render() {
    return (
      <Card
        className={classNames(comStyles.small, comStyles.card)}
      >
        <ul className={styles.navlist}>
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
      </Card>
    );
  }
}
