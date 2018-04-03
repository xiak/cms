import React, { PureComponent } from 'react';
import WebHeader from '../../../components/Header/WebHeader';
import WebEditor from '../../../components/Content/WebEditor';

export default class Creater extends PureComponent {
  render() {
    return (
      <div>
        <WebHeader />
        <WebEditor />
      </div>
    );
  }
}
