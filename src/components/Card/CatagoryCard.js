import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import classNames from 'classnames';
import styles from './CatagoryCard.less';
import comStyles from '../Common/mixins.less';

export default class CatagoryCard extends PureComponent {
  render() {
    return (
      <div
        className={classNames(comStyles.small, comStyles.Card)}
      >
        <ul className={styles.Catalist}>
          <li className={classNames(comStyles.yellow)}>
            <Icon type="desktop" className={styles.cataItem} />
            <span className={styles.cataClass}>
              <span>直播</span>
            </span>
          </li>
          <li className={comStyles.green}>
            <Icon type="book" className={styles.cataItem} />
            <span className={styles.cataClass}>
              <span>书店</span>
            </span>
          </li>
          <li className={comStyles.blue}>
            <Icon type="notification" className={styles.cataItem} />
            <span className={styles.cataClass}>
              <span>话题</span>
            </span>
          </li>
          <li className={comStyles.blue}>
            <Icon type="edit" className={styles.cataItem} />
            <span className={styles.cataClass}>
              <span>专栏</span>
            </span>
          </li>
          <li className={comStyles.blue}>
            <Icon type="red-envelope" className={styles.cataItem} />
            <span className={styles.cataClass}>
              <span>付费咨询</span>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
