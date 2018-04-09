import React, { PureComponent } from 'react';
import Header from '../../components/Header/WebHeader';
import Content from '../../components/Content/MainContent';

export default class Article extends PureComponent {
  render() {
    const { match } = this.props;
    const key = match.path;
    return (
      <div>
        <Header selectedKey={key} />
        <Content />
      </div>
    );
  }
}
