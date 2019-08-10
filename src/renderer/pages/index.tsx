import { connect } from 'dva';
import React, { Component } from 'react';
import { Audio, Menu } from '@/components';
// import yay from '@/assets/yay.jpg';

interface IIndexProps {
  global;
}
@connect(global => global)
export default class Index extends Component<IIndexProps> {
  static defaultProps: IIndexProps = {};

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Menu />
        {/* <Audio src='https://music.163.com/song/media/outer/url?id=33894312.mp3' controls /> */}
        {/* <img src={yay} /> */}
      </div>
    );
  }
}
