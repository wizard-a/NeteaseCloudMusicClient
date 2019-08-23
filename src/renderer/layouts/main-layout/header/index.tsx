import * as React from 'react';
import classnames from 'classnames';
import {Menu} from '@/components';
import {connect} from 'dva';
import {MenuItem} from '@/models/menu';
import Top from './top';
import styles from './header.less';

export interface IHeaderProps {
    className?: string;
    currMenu: MenuItem;
}

export interface IHeaderState {
}
@connect(({menu}) => ({
  currMenu: menu.currMenu,
}))
class Header extends React.Component<IHeaderProps, IHeaderState> {
  static Top = Top;
  constructor(props: IHeaderProps) {
    super(props);

    this.state = {
    };
  }

  public render() {
    const { className, currMenu} = this.props;
    const classNames = classnames(styles.header, className);
    return (
      <div className={styles.header}>
        <Menu.HeaderMenu data={currMenu.headerMenu} />
      </div>
    );
  }
}


export default Header;
