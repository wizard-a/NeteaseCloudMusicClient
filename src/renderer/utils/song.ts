
import { getState, dispatch } from './app';

const getSongName = (ar) => {
    if (ar && ar.length > 0) {
        return ar.map((a) => a.name).join(' / ');
    }
    return '';
};

/**
 * 获取playData
 * @param info
 */
export const getPlayData = (info) => {
    return {
        id: info.id,
        name: info.name,
        songName: getSongName(info.ar),
        songBg: info && info.al.picUrl,
    };
};


/** 播放上一首 */
export const playUp = () => {
    const { playList: { playDataList, playData } } = getState();
    if (playDataList.length === 0) {
        return;
    }
    const index: number = playDataList.findIndex((item) => item.id === playData.id);
    let currPlayData = null;
    if (index === 0) {
        currPlayData = playDataList[playDataList.length - 1];
    } else {
        currPlayData = playDataList[index - 1];
    }
    dispatch({
        type: 'playList/setPlayData',
        payload: currPlayData,
    });
};

/** 播放下一首 */
export const playNext = () => {
    // debugger;
    const { playList: { playDataList, playData } } = getState();
    if (playDataList.length === 0) {
        return;
    }
    const index: number = playDataList.findIndex((item) => item.id === playData.id);
    let currPlayData = null;
    if (index === playDataList.length - 1) {
        currPlayData = playDataList[0];
    } else {
        currPlayData = playDataList[index + 1];
    }
    dispatch({
        type: 'playList/setPlayData',
        payload: currPlayData,
    });
};
