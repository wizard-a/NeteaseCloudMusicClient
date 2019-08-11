import * as React from 'react';
import classnames from 'classnames';
import {Icon} from '@/components';
import styles from './menu.less';


export interface IItemProps {
    className?: string;
    active?: string;
    icon?: string;
    name?: string;
}

export interface IItemState {
    isHover: boolean;
}

const iconStyle = {
    fontSize: '15px',
    color: '#2f2f2f',
    marginRight: '6px',
};

class Item extends React.Component<IItemProps, IItemState> {
    constructor(props: IItemProps) {
        super(props);

        this.state = {
            isHover: false,
        };
    }

    handleMouseDown = () => {
        this.setState({
            isHover: true,
        });
    }

    handleMouseUp = () => {
        this.setState({
            isHover: false,
        });
    }

    public render() {
        const { className, icon, name, active } = this.props;
        const { isHover } = this.state;
        const classNames = classnames(styles.item, className, {
            [styles.active]: active,
            [styles.hover]: !active && isHover,
        });
        return (
            <div
                className={classNames}
                onMouseEnter={this.handleMouseDown}
                onMouseLeave={this.handleMouseUp}
            >
                <Icon style={iconStyle} type={icon} />
                {name}
            </div>
        );
    }
}

export default Item;