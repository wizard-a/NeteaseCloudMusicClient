import * as React from 'react';
import classnames from 'classnames';
import { withElectron } from '@/components/hight-order';
import { Menu} from '@/components';
import Header from './header';
import Footer from './footer';
import Content from './content';
import { connect } from 'dva';
import styles from './index.less';

export interface IMainLayoutProps {
    className?: string;
    electron: any;
}

export interface IMainLayoutState {
}


// @connect()
@withElectron
class MainLayout extends React.Component<IMainLayoutProps, IMainLayoutState> {
    constructor(props: IMainLayoutProps) {
        super(props);
        this.mainRef = React.createRef();
        this.state = {
        };
    }

    componentDidMount() {
        this.bindResizeEvent();
    }

    bindResizeEvent = () => {
        const {
            electron: { isElectron },
        } = this.props;
        if (!isElectron) {
            this.winResize();
            window.onresize = e => {
                this.winResize();
            };
        }
    }

    winResize = () => {
        const mainElement = this.mainRef.current;
        if (!mainElement) {
            return;
        }
        mainElement.style.maxWidth = '1200px';
        if (window.innerWidth < 900 || window.innerHeight < 600) {
            mainElement.style.height = '100%';
            mainElement.style.width = '100%';
            // mainElement.style.overflow = "auto";
        } else {
            mainElement.style.height = '70%';
            mainElement.style.width = '70%';
            // mainElement.style.overflow = "hidden";
        }
        if (window.innerHeight < 580) {
            mainElement.style.height = '580px';
            mainElement.style.position = 'relative';
        } else {
            mainElement.style.position = 'absolute';
        }
    }

    public render() {
        const { className, children } = this.props;

        const classNames = classnames(styles.main, className);
        return (
            <div id='main' ref={this.mainRef} className={classNames}>
                <Header />
                <Content>
                    {children}
                </Content>
                <Footer />
            </div>
        );
    }
}

export default MainLayout;