import React, { PureComponent } from 'react';
import { Link } from 'dva/router';
import { Menu, Button } from 'antd';
import classNames from 'classnames';
import styles from './WebHeader.less';
import comStyles from '../Common/mixins.less';


export default class WebHeader extends PureComponent {
  render() {
    const { selectedKey } = this.props;
    return (
      <header
        id="web-header"
        className={classNames(styles.header, comStyles.IsFixed)}
        style={{ width: '100%' }}
      >
        <div className={styles.inner} >
          <nav className={styles.logo}>
            <Link to="/">
              <img src="/favicon.ico" alt="" />
              <span>侠客网</span>
            </Link>
          </nav>
          <nav className={styles.nav}>
            <Menu
              id="nav"
              key="nav"
              selectedKeys={[selectedKey || 'home']}
              mode="horizontal"
            >
              <Menu.Item key="/">
                <Link to="/" >
                  首页
                </Link>
              </Menu.Item>
              <Menu.Item key="/creator">
                <Link to="/creator" >
                  写文章
                </Link>
              </Menu.Item>
            </Menu>
          </nav>
          <nav className={styles.userInfo}>
            <Button>
              登录
            </Button>
          </nav>
        </div>
      </header>
    );
  }
}
