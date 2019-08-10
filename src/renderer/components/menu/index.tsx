import * as React from 'react';
import { Button } from 'antd';

export interface IMenuProps {
}

export interface IMenuState {
}

class Menu extends React.Component<IMenuProps, IMenuState> {
  // constructor(props: IMenuProps) {
  //   super(props);

  //   this.state = {
  //   };
  // }

  public render() {
    return (
      <div>
        <Button>test</Button>
      </div>
    );
  }
}

export default Menu;
