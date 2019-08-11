import * as React from 'react';
import SplitPane, { Props } from 'react-split-pane';
import './splitPanel.less';

const styleProps = {
    width: 'auto',
};


const SplitPanel: React.SFC<Props> = (props) => {
    return (
        <SplitPane style={styleProps} {...props} />
    );
};

export default SplitPanel;
