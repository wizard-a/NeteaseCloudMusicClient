import * as React from 'react';
import classnames from 'classnames';
import Icon from '@/components/icon';
import styles from './systemBar.less';

export interface IMacBtnProps {
    type: string;
    onClick?: Function;
}

export interface IMacBtnState {
}

export default class MacBtn extends React.Component<IMacBtnProps, IMacBtnState> {
  constructor(props: IMacBtnProps) {
    super(props);
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick();
}

  public render() {
    const { type } = this.props;
    const classNames = classnames(styles.macBtn, styles[`macBtn-${type}`]);
    return (
        <div className={classNames} onClick={this.handleClick}>
            <Icon type={`icon-mac-${type}`}/>
        </div>
    );
  }
}

