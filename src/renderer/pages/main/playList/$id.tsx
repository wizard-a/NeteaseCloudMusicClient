import * as React from 'react';
import { connect } from 'dva';
import { IRedux } from '@/schema/redux';
import { RouteComponentProps } from 'react-router';
import moment from 'moment';
import { Button, Table } from 'antd';
import { getPlayData } from '@/utils/song';
import styles from './playList.less';

export interface IIndexProps extends IRedux, RouteComponentProps {
    playList: any;
}

export interface IIndexState {
}


export interface IParams {
    id: string;
}

@connect(({ playList }) => ({
    ...playList,
}))
class Index extends React.Component<IIndexProps, IIndexState> {
    constructor(props: IIndexProps) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
        const { dispatch, match: { params } } = this.props;
        const newParams: IParams = params as IParams;
        dispatch({
            type: 'playList/queryPlayList',
            payload: newParams.id,
        });
    }

    play = (item) => {
        // console.log('item', item);
        this.props.dispatch({
            type: 'playList/setCurrPlayData',
            payload: getPlayData(item),
        });
    }


    public render() {
        const { playList } = this.props;
        const { creator } = playList;
        if (!creator) {
            return null;
        }
        const createTime = moment(playList.createTime).format('YYYY-MM-DD');
        const columns = [
            {
                title: '音乐标题',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '歌手',
                dataIndex: 'ar',
                key: 'ar',
                render: (text, item) => {
                    if (item.ar && item.ar.length > 0) {
                        return item.ar.map((a) => a.name).join(' / ');
                    }
                    return '未知';
                },
            },
            {
                title: '专辑',
                dataIndex: 'al.name',
                key: 'al.name',
            },
            {
                title: '时长',
                dataIndex: 'dt',
                key: 'dt',
            },
        ];
        console.log('playList', this.props.playList);
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <img className={styles.banner} src={playList.coverImgUrl} />
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <div className={styles.playName}>歌单</div>
                            <span className={styles.name}>{playList.name}</span>
                        </div>
                        <div className={styles.baseInfo}>
                            <img src={creator.avatarUrl} />
                            <span className={styles.link}>{creator.nickname}</span>
                            <span className={styles.time}>{createTime}创建</span>
                        </div>
                        <div className={styles.operation}>
                            <Button shape='round'>播放全部</Button>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.item}>
                                <span>标签</span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Table
                        rowKey='id'
                        // scroll={{ y: 400 }}
                        dataSource={playList.tracks}
                        columns={columns}
                        onRow={(record) => {
                            return {
                                onClick: () => {
                                    this.play(record);
                                    // console.log('record', record);
                                },
                            };
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Index;
