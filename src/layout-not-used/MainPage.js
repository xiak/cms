import React, { PureComponent } from 'react';
import Header from '../components/Header/WebHeader';
import Content from '../components/Content/MainContent';

export default class MainPage extends PureComponent {
  render() {
    const { headerKey, contents } = this.props;
    return (
      <div>
        <Header selectedKey={headerKey} />
        <Content contents={contents} />
      </div>
    );
  }
}
