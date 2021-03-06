import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { LocaleProvider, Spin } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';
import { getRouterData } from './common/router';
import styles from './index.less';

dynamic.setDefaultLoadingComponent(() => {
  return <Spin size="large" className={styles.globalSpin} />;
});

function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  const Index = routerData['/'].component;
  const Write = routerData['/creator'].component;
  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Index {...props} />}
          />
          <Route
            path="/creator"
            render={props => <Write {...props} />}
          />
          <Route
            path="/article/:id"
            render={props => <Write {...props} />}
          />
        </Switch>
      </Router>
    </LocaleProvider>
  );
}

export default RouterConfig;
