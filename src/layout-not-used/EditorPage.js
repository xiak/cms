import React, { PureComponent } from 'react';
import Header from '../components/Header/WebHeader';
import Content from '../components/Content/EditorContent';

export default class EditorPage extends PureComponent {
  render() {
    const { headerKey } = this.props;
    return (
      <div>
        <Header selectedKey={headerKey} />
        <Content />
      </div>
    );
  }
}
