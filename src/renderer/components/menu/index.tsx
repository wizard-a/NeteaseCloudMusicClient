import * as React from 'react';
import Item from './item';
import Label from './label';
import HeaderMenu from './header';
import { MenuItem } from '@/models/menu';
import styles from './menu.less';

export interface IMenuProps {
  data: MenuItem[];
}

export interface IMenuState {
}

class Menu extends React.Component<IMenuProps, IMenuState> {

  static HeaderMenu: React.ComponentClass = HeaderMenu;
  // constructor(props: IMenuProps) {
  //   super(props);

  //   this.state = {
  //   };

  public render() {
    const {data} = this.props;
    return (
      <div className={styles.menu}>
        {
          data && data.map(item => {
            if (item.type === 'menu') {
              return <Item key={item.name} name={item.name} icon={item.icon} />;
            }
            return <Label key={item.name} name={item.name} />;
          })
        }
      </div>
    );
  }
}

export default Menu;
