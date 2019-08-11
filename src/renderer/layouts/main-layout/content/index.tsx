import * as React from 'react';
import classnames from 'classnames';
import { Menu, SplitPanel } from '@/components';
import { MenuItem } from '@/models/menu';
import { connect } from 'dva';
import styles from './content.less';

export interface IHeaderProps {
    className?: string;
    menuData: MenuItem[];
}

export interface IHeaderState {
}

@connect(({menu}) => ({
  menuData: menu.data,
}))
class Content extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);

    this.state = {
    };
  }

  public render() {
    const { className, children, menuData} = this.props;
    const classNames = classnames(styles.content, className);
    return (
      <div className={classNames}>
        <SplitPanel
          defaultSize={200}
          maxSize={250}
          minSize={180}
        >
          <div className={styles.left}>
            <Menu data={menuData} />
          </div>
          <div className={styles.children}>
            {children}
          </div>
        </SplitPanel>
      </div>
    );
  }
}


export default Content;
