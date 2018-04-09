import React, { PureComponent } from 'react';
import Header from '../../components/Header/WebHeader';
import Content from '../../components/Content/EditorContent';

export default class Creator extends PureComponent {
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
