
import { Effect } from 'dva';
import { Reducer } from 'redux';

export interface GlobalModelState {
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    init: Effect;
    // fetchCurrent: Effect;
  };
  reducers: {
    saveGlobalList: Reducer<GlobalModelState>;
    // changeNotifyCount: Reducer<UserModelState>;
  };
  subscriptions: {

  },
}


const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    GlobalList: [],
  },
  effects: {
    *init(_, { call, put }) {
      const playListDataStr = window.localStorage.getItem('play-list-data');
      if (playListDataStr) {
        const playListData = JSON.parse(playListDataStr);
        if (playListData && playListData.length > 0) {
          yield put({
            type: 'playList/initPlayDataList',
            payload: playListData,
          });
          yield put({
            type: 'playList/setPlayData',
            payload: playListData[0],
          });
        }
      }
    },
  },

  reducers: {
    saveGlobalList(state, { payload }) {
      return {
        ...state,
        GlobalList: payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        const pathname = location.pathname;
        console.log('pathname', pathname);
      });
    },
  },
};


export default GlobalModel;