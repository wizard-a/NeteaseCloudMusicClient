import { connect } from 'dva';
import React, { Component } from 'react';
import { Audio, Menu } from '@/components';
import Personalize from './main/components/personalize';
// import yay from '@/assets/yay.jpg';

interface IIndexProps {
  global;
}
@connect(global => global)
export default class Index extends Component<IIndexProps> {
  static defaultProps = {
  };

  render() {
    return (
      <div>
        <Personalize />
      </div>
    );
  }
}
