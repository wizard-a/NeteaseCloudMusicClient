
import { Effect } from 'dva';
import { Reducer } from 'redux';
import { queryPersonalizeList } from '@/services/personalized';

export interface PersonalizeModelState {
    personalizeList: Object[];
}

export interface PersonalizeModelType {
    namespace: 'personalize';
    state: PersonalizeModelState;
    effects: {
        personalizeList: Effect;
        // fetchCurrent: Effect;
    };
    reducers: {
        savePersonalizeList: Reducer<PersonalizeModelState>;
        // changeNotifyCount: Reducer<UserModelState>;
    };
}


const PersonalizeModel: PersonalizeModelType = {
    namespace: 'personalize',
    state: {
        personalizeList: [],
    },
    effects: {
        *personalizeList(_, { call, put }) {
            const response = yield call(queryPersonalizeList);
            if (response.length > 0) {
                yield put({
                    type: 'savePersonalizeList',
                    payload: response.slice(0, 10),
                  });
            }
        },
    },

    reducers: {
        savePersonalizeList(state, {payload}) {
            return {
                ...state,
                personalizeList: payload,
            };
        },
    },
};


export default PersonalizeModel;