import React, { PureComponent } from 'react';
import { Card, Icon } from 'antd';
import classNames from 'classnames';
import styles from './CatagoryCard.less';
import comStyles from '../Common/mixins.less';

export default class CatagoryCard extends PureComponent {
  render() {
    return (
      <Card
        className={classNames(comStyles.small, comStyles.card)}
      >
        <ul className={styles.catalist}>
          <li className={comStyles.yellow}>
            <Icon type="pay-circle" className={styles.cataItem} />
            <span className={styles.cataClass}>
              <span>财富</span>
            </span>
          </li>
          <li className={comStyles.green}>
            <Icon type="like" className={styles.cataItem} />
            <span className={styles.cataClass}>
              <span>关注</span>
            </span>
          </li>
          <li className={comStyles.blue}>
            <Icon type="clock-circle" className={styles.cataItem} />
            <span className={styles.cataClass}>
              <span>浏览</span>
            </span>
          </li>
          <li className={comStyles.blue}>
            <Icon type="shopping-cart" className={styles.cataItem} />
            <span className={styles.cataClass}>
              <span>购物</span>
            </span>
          </li>
        </ul>
      </Card>
    );
  }
}
