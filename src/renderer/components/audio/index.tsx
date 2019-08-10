import React, { Component } from 'react';

export interface AudioProps {
  src: string;
  /**
   * 是否显示工具栏
   */
  controls?: boolean;
}

export interface AudioState {
  time?: string;
}

class Audio extends Component<AudioProps, AudioState> {
  state = {

  };

  render() {
    const {src, controls} = this.props;
    return (
      <audio src={src} controls={controls}>
        您的浏览器不支持audio
      </audio>
    );
  }
}

export default Audio;
