import * as React from 'react';
import classnames from 'classnames';
import styles from './menu.less';

export interface IItemProps {
    className?: string;
    name?: string;
}

export interface IItemState {
}

class Item extends React.Component<IItemProps, IItemState> {
    constructor(props: IItemProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        const { className, name } = this.props;
        const classNames = classnames(styles.label, className);
        return (
            <div className={classNames}>
                {name}
            </div>
        );
    }
}

export default Item;