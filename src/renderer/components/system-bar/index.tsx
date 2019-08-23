import * as React from 'react';
import classnames from 'classnames';
import MacBtn from './macBtn';
import WinBtn from './winBtn';
import styles from './systemBar.less';

export interface IIndexProps {
    type: string;
    className?: string;
}

export interface IIndexState {
}

export default class Index extends React.Component<IIndexProps, IIndexState> {
    static MacBtn = MacBtn;
    static WinBtn = WinBtn;
  constructor(props: IIndexProps) {
    super(props);
  }

  public render() {
    const {type, className, children} = this.props;

    const classNames = classnames(className, {
        [styles.macBar]: type === 'mac',
        [styles.winBar]: type === 'win',
    });
    return (
        <div className={classNames}>
            {children}
        </div>
    );
  }
}
