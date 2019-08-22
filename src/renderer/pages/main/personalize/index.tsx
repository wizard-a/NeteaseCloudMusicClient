import * as React from 'react';
import { connect } from 'dva';
import { IRedux } from '@/schema/redux';
import { Item } from '@/components/personalize';
import styles from './personalize.less';


export interface IPersonalizeProps extends IRedux {
    data: Array<{
        id: number,
        name: string,
        picUrl: string,
        playCount: number,
    }>;

}

export interface IPersonalizeState {
}

@connect(({ personalize }) => ({
    data: personalize.personalizeList,
}))
class Personalize extends React.Component<IPersonalizeProps, IPersonalizeState> {
    constructor(props: IPersonalizeProps) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'personalize/personalizeList',
        });
    }

    public render() {
        const { data } = this.props;
        return (
            <div className={styles.container}>
                {data && data.map(item => {
                    return <Item
                        key={item.id}
                        name={item.name}
                        id={item.id}
                        picUrl={item.picUrl}
                        playCount={item.playCount}
                    />;
                })}
            </div>
        );
    }
}


export default Personalize;