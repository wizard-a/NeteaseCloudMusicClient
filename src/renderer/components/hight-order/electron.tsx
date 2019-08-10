import * as React from 'react';
import { getDisplayName } from './util';
import {isElectron, isElectronWin, isMac, isWin} from '@/utils/electron';



// interface IElectronProps {
//     electron: any; // TODO 需要处理类型
// }

// export default <OriginalProps extends any>(
//     ElectronWrappedComponent: React.ComponentType<OriginalProps & IElectronProps>,
// ) => {
//     type Props = Omit<OriginalProps, keyof IElectronProps>;
//     class ElectronComponent extends React.Component<OriginalProps> {
//         render() {
//             const { ...rest } = this.props;
//             const electron = {
//                 isElectron: isElectron(),
//                 isElectronWin: isElectronWin(),
//                 isMac: isMac(),
//                 isWin: isWin(),

//                 // isElectronWin: true,
//                 // isMac: !isMac(),
//                 // isWin: !isWin(),
//             };
//             return <ElectronWrappedComponent {...rest} electron={electron}/>;
//         }
//     }
// };

// import React, { Component } from 'react';
// import { isElectron, isMac, isWin } from '@/utils/electron';


export default (ElectronWrappedComponent: any) => {
    class ElectronComponent extends React.Component<any, any> {
        static displayName: string;
        render() {
            const electron = {
                isElectron: isElectron(),
                isElectronWin: isElectronWin(),
                isMac: isMac(),
                isWin: isWin(),

                // isElectronWin: true,
                // isMac: !isMac(),
                // isWin: !isWin(),
            };
            return <ElectronWrappedComponent {...this.props} electron={electron}/>;
        }
    }

    ElectronComponent.displayName = `ElectronWrappedComponent(${getDisplayName(ElectronWrappedComponent)})`;

    return ElectronComponent;
};
