import * as React from 'react';
import { SystemBar } from '@/components';

const { MacBtn, WinBtn } = SystemBar;

export interface ISystemBarHeaderProps {
    className?: string;
    type: string;
    menuTypes: string[];
}

export interface ISystemBarHeaderState {
}

window.electron = {};

export default class SystemBarHeader extends React.Component<ISystemBarHeaderProps, ISystemBarHeaderState> {
    constructor(props: ISystemBarHeaderProps) {
        super(props);
    }


    onClose = () => {
        window.electron.close();
    }

    onMin = () => {
        window.electron.min();
    }

    onMax = () => {
        window.electron.min();
    }

    public render() {
        const { type, menuTypes, className } = this.props;
        return (
            <SystemBar className={className} type={type}>
                {
                    type === 'mac' && <React.Fragment>
                        {menuTypes.indexOf('close') >= 0 && <MacBtn onClick={this.onClose} type='close' />}
                        {menuTypes.indexOf('min') >= 0 && <MacBtn onClick={this.onMin} type='min' />}
                        {menuTypes.indexOf('max') >= 0 && <MacBtn onClick={this.onMax} type='max' />}
                    </React.Fragment>
                }

                {
                    type === 'win' && <React.Fragment>
                        {menuTypes.indexOf('min') >= 0 && <WinBtn onClick={this.onMin} type='min' />}
                        {menuTypes.indexOf('max') >= 0 && <WinBtn onClick={this.onMax} type='max' />}
                        {menuTypes.indexOf('close') >= 0 && <WinBtn onClick={this.onClose} type='close' />}
                    </React.Fragment>
                }
            </SystemBar>
        );
    }
}
