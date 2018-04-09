import React, { PureComponent } from 'react';
import Header from '../components/Header/WebHeader';
import Content from '../components/Content/ArticleContent';

export default class EditorPage extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}
