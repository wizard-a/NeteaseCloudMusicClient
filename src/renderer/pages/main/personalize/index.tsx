import * as React from 'react';
import { connect } from 'dva';
import { IRedux } from '@/schema/redux';
import { Item } from '@/components/personalize';
import { Icon } from 'antd';
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

    renderItem = (data, rowCount = 5) => {
        const remainder = data.length % rowCount;
        const rowData = [];
        const rows = remainder !== 0 ? (data.length / rowCount) + 1 : data.length / rowCount;
        for (let i = 0; i < rows; i++) {
            rowData.push(data.slice(i * rowCount, (i + 1) * rowCount));
        }
        console.log('rowData', data, rowData, remainder);
        return <React.Fragment>
            {
                rowData.map((currRow) => {
                    return <div key={JSON.stringify(currRow)} className={styles.row}>
                        {currRow && currRow.map((item) => {
                            return <Item
                                key={item.id}
                                name={item.name}
                                id={item.id}
                                picUrl={item.picUrl}
                                playCount={item.playCount}
                            />;
                        })}
                    </div>;
                })
            }
        </React.Fragment>;
    }

    public render() {
        const { data } = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.title}>推荐歌单<Icon type='right' /></div>
                    {this.renderItem(data, 5)}
                </div>
            </div>
        );
    }
}


export default Personalize;