/**
 * 获取 Redux Store 上的方法，如（dispatch(), getState()，...）
 */
export const getStoreFun = () => {
    return window.g_app._store;
};

export const dispatch = (p) => {
    return getStoreFun().dispatch(p);
};

export const getState = () => {
    return getStoreFun().getState();
};