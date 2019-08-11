import * as React from 'react';
import {MenuItemHeader} from '@/models/menu';
import styles from './menu.less';


export interface IHeaderMenuProps {
    data: MenuItemHeader[];
}

export interface IHeaderMenuState {
}

class HeaderMenu extends React.Component<IHeaderMenuProps, IHeaderMenuState> {
    constructor(props: IHeaderMenuProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        const { data } = this.props;
        return (
            <div className={styles.headerMenu}>
                {
                    data.map(item => {
                       return <span className={styles.headerMenuItem} key={item.name}>{item.name}</span>;
                    })
                }
            </div>
        );
    }
}

export default HeaderMenu;