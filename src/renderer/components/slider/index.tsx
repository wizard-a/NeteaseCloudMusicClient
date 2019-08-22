import * as React from 'react';
import Slider, { Range } from 'rc-slider';
import styles from './slider.less';

export interface ISliderProps {
}

export interface ISliderState {
}

export default class MySlider extends React.Component<ISliderProps, ISliderState> {
  constructor(props: ISliderProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        <Slider />
        <Range />
      </div>
    );
  }
}
