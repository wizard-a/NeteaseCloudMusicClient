import { Effect } from 'dva';
import { Reducer } from 'redux';

import { queryCurrent, query as queryUsers } from '@/services/user';

const menuData = [
    {icon: 'icon-main', name: '发现音乐', url: '/', type: 'menu', headerMenu: [
        {name: '个性推荐', url: '/'},
        {name: '歌单', url: ''},
        {name: '主播电台', url: ''},
        {name: '排行旁', url: ''},
        {name: '歌手', url: ''},
        {name: '最新音乐', url: ''},
    ]} as MenuItem,
    {icon: 'icon-fm', name: '私人FM', url: '', type: 'menu'} as MenuItem,
    {icon: 'icon-video', name: '视频', url: '', type: 'menu'} as MenuItem,
    {icon: 'icon-friend', name: '朋友', url: '', type: 'menu'} as MenuItem,

    {name: '我的音乐', type: 'label'} as MenuItem,
    {icon: 'icon-download', name: '下载管理', url: '', type: 'menu'} as MenuItem,
];

export interface MenuItemHeader {
    name: string;
    url: string;
}

export interface MenuItem {
    name: string;
    icon?: string;
    url: string;
    type: string;
    headerMenu?: MenuItemHeader[];
}

export interface MenuModelState {
    data: MenuItem[];
    currMenu: MenuItem;
}

export interface MenuModelType {
    namespace: 'menu';
    state: MenuModelState;
    effects?: {
        fetch: Effect;
        fetchCurrent: Effect;
    };
    reducers?: {
        saveCurrentUser: Reducer<UserModelState>;
        changeNotifyCount: Reducer<UserModelState>;
    };
}


const MenuModel: MenuModelType = {
    namespace: 'menu',
    state: {
        data: menuData,
        currMenu: menuData[0],
    },
};


export default MenuModel;