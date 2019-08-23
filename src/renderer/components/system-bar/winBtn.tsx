import * as React from 'react';
import classnames from 'classnames';
import Icon from '@/components/icon';
import styles from './systemBar.less';

export interface IWinBtnProps {
    type: string;
    onClick?: Function;
}

export interface IWinBtnState {
}

export default class WinBtn extends React.Component<IWinBtnProps, IWinBtnState> {
  constructor(props: IWinBtnProps) {
    super(props);
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick();
}

  public render() {
    const { type } = this.props;
    const classNames = classnames(styles.winBtn, styles[`winBtn-${type}`]);
    return (
        <div className={classNames} onClick={this.handleClick}>
            <Icon type={`icon-win-${type}`}/>
        </div>
    );
  }
}
