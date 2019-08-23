import * as React from 'react';
import classnames from 'classnames';
import {Icon} from 'antd';
import { SystemBarHeader} from '@/bcomponents';
import styles from './header.less';

export interface IHeaderProps {
    className?: string;
}

export interface IHeaderState {
}

class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);

    this.state = {
    };
  }

  public render() {
    const { className} = this.props;
    const classNames = classnames(styles.header, styles.headerTop, className);
    return (
      <div className={classNames}>
          <SystemBarHeader className={styles.bar} menuTypes={['min', 'max', 'close']} type='mac' />
          <div className={styles.operation}>
            <Icon style={{marginRight: '15px'}} type='left' />
            <Icon type='right' />
          </div>
      </div>
    );
  }
}


export default Header;
