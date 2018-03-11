import React, { PureComponent } from 'react';
import { Link } from 'dva/router';
import { Menu, Button } from 'antd';
import classNames from 'classnames';
import styles from './WebHeader.less';
import comStyles from '../Common/mixins.less';

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
        id="web-header"
        className={classNames(styles.header, comStyles.fixed)}
        style={{ width: '100%' }}
      >
        <div className={styles.inner} >
          <nav className={styles.logo}>
            <a href="/">侠客百晓生</a>
          </nav>
          <nav className={styles.nav}>
            <Menu
              id="nav"
              key="nav"
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="home">
                <a to="/">
                  首页
                </a>
              </Menu.Item>
              <Menu.Item key="discovery">
                <a to="/discovery">
                  发现
                </a>
              </Menu.Item>
              <Menu.Item key="topic">
                <a to="/topic">
                  话题
                </a>
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
