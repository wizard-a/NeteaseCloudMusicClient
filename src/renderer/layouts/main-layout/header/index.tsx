import * as React from 'react';
import classnames from 'classnames';
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
    const classNames = classnames(styles.header, className);
    return (
      <div className={styles.header}>
        Header
      </div>
    );
  }
}


export default Header;
