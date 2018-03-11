import React, { PureComponent } from 'react';
import { Link } from 'dva/router';
import { Layout, Menu, Button } from 'antd';
import classNames from 'classnames';
import styles from './AppHeader.less';

export default class WebHeader extends PureComponent {
  state = {
    current: 'home',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <header
        id="app-header"
      >
        <div className={styles.main} >
          <div className={styles.logo}>
            <a href="/">
              侠客百晓生
            </a>
          </div>
          <nav className={styles.nav}>
            <ul>
              <li>
                <a href="/#!index/feed">订阅</a>
              </li>
              <li>
                <a href="/#!index/site">网址</a>
              </li>
              <li>
                <a href="javascript:;">我的</a>
              </li>
            </ul>
          </nav>
          <nav className={styles.userInfo}>
            <div className={styles.userMenu} >
              <Button className={styles.loginButton}>
                登录
              </Button>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
