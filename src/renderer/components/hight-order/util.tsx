/**
 * 返回高阶组件名称
 * @param {*} WrappedComponent
 */
export const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};
