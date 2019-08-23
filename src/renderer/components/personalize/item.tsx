import * as React from 'react';
import classnames from 'classnames';
import styles from './personzlize.less';

export interface IItemProps {
    className?: string;
    id: number;
    name: string;
    picUrl: string;
    playCount: number;
}

export interface IItemState {
}

export default class Item extends React.Component<IItemProps, IItemState> {
    constructor(props: IItemProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        const {className, picUrl, name} = this.props;
        const classNames = classnames(styles.item, className);
        return (
            <div className={classNames}>
                <img className={styles.img} src={picUrl} />
                <div className={styles.name}>{name}</div>
            </div>
        );
    }
}
