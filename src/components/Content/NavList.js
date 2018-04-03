import React, { PureComponent } from 'react';
import CatagoryCard from '../Card/CatagoryCard';
import NavListCard from '../Card/NavListCard';
import comStyles from '../Common/mixins.less';
import styles from './NavList.less'

export default class NavList extends PureComponent {
  render() {
    return (
      <div className={styles.contentSider}>
        <div className={comStyles.IsFixed}>
          <CatagoryCard />
          <NavListCard />
        </div>
      </div>
    )
  }
}
