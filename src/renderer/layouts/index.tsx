import React from 'react';
import MainLayout from './main-layout';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

import styles from './layout.less';

moment.locale('zh-cn');

interface Props {
    location: Location;
}

const Layout: React.SFC<Props> = (props) => {
    const { location: { pathname }, children } = props;
    let content = null;
    console.log('render')
    if (pathname.startsWith('/electron') ) {
        content = (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
    } else {
        content =  (
            <div className={styles.container}>
                <MainLayout>
                    {children}
                </MainLayout>
            </div>
        );
    }
    return (
        <ConfigProvider locale={zh_CN}>
            { content }
        </ConfigProvider>
    );
};

export default Layout;
