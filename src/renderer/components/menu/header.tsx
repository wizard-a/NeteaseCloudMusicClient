import * as React from 'react';
import {MenuItemHeader} from '@/models/menu';
import {router} from 'umi';
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
        };
    }

    handleClick = (item) => {
        router.push(item.url);
    }

    public render() {
        const { data } = this.props;
        return (
            <div className={styles.headerMenu}>
                {
                    data.map(item => {
                       return <span
                        onClick={() => this.handleClick(item)}
                        className={styles.headerMenuItem}
                        key={item.name}>{item.name}</span>;
                    })
                }
            </div>
        );
    }
}

export default HeaderMenu;