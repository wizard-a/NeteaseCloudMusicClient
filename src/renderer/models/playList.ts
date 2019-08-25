
import { Effect } from 'dva';
import { Reducer } from 'redux';
import { queryPlayList, querySongDetail } from '@/services/personalized';

export interface PlayListModelState {
    playList: Object;
    playData: Object;
    /** 存放待播放的音乐列表 */
    playDataList: Object[];
}

export interface PlayListModelType {
    namespace: 'playList';
    state: PlayListModelState;
    effects: {
        queryPlayList: Effect;
        setCurrPlayData: Effect;
        // fetchCurrent: Effect;
    };
    reducers: {
        savePlayList: Reducer<PlayListModelState>;
        setPlayData: Reducer<PlayListModelState>;
        setPlayDataList: Reducer<PlayListModelState>;
        initPlayDataList: Reducer<PlayListModelState>;
        // changeNotifyCount: Reducer<UserModelState>;
    };
}


const updatePlayDataList = (originData, data) => {
    let newData = originData;
    const tmpObj = {};
    for (const item of newData) {
        if (item.id) {
            tmpObj[item.id] = true;
        }
    }
    if (Array.isArray(data)) {
        for (const currData of data) {
            if (tmpObj[currData.id]) {
                newData = newData.filter((f) => f.id !== currData.id);
            }
            newData.unshift(currData);
        }
    } else {
        if (tmpObj[data.id]) {
            newData = newData.filter((f) => f.id !== data.id);
        }
        newData.unshift(data);
    }
    localStorage.setItem('play-list-data', JSON.stringify(newData));
    return newData;
};

const PlayListModel: PlayListModelType = {
    namespace: 'playList',
    state: {
        playList: {},
        playData: {},
        playDataList: [],
    },
    effects: {
        *queryPlayList({payload}, { call, put }) {
            const response = yield call(queryPlayList, payload);
            // let ids = '';
            // let i = 0;
            // if (response.playlist && response.playlist.trackIds) {
            //     for (const item of response.playlist.trackIds) {
            //         if (i >= 19) {
            //             break;
            //         }
            //         i++;
            //         ids += `${item.id},`;
            //     }
            // }
            // const songs = yield call(querySongDetail, ids.substring(0, ids.length - 1));
            // console.log('songs', songs);
            yield put({
                type: 'savePlayList',
                payload: response.playlist,
            });
            // if (response.length > 0) {
            //     yield put({
            //         type: 'savePersonalizeList',
            //         payload: response.slice(0, 10),
            //       });
            // }
        },
        *setCurrPlayData({payload}, { call, put }) {
            yield put({
                type: 'setPlayData',
                payload,
            });
            yield put({
                type: 'setPlayDataList',
                payload,
            });
        },
    },
    reducers: {
        savePlayList(state, {payload}) {
            return {
                ...state,
                playList: payload,
            };
        },
        setPlayData(state, {payload}) {
            return {
                ...state,
                playData: payload,
            };
        },
        initPlayDataList(state, {payload}) {
            return {
                ...state,
                playDataList: payload,
            };
        },
        setPlayDataList(state, {payload}) {
            return {
                ...state,
                playDataList: updatePlayDataList(state.playDataList, payload),
            };
        },
    },
};


export default PlayListModel;