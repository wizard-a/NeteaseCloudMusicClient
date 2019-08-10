import * as React from 'react';
import classnames from 'classnames';
import styles from './content.less';

export interface IHeaderProps {
    className?: string;
}

export interface IHeaderState {
}

class Content extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);

    this.state = {
    };
  }

  public render() {
    const { className, children} = this.props;
    const classNames = classnames(styles.content, className);
    return (
      <div className={classNames}>
        {children}
      </div>
    );
  }
}


export default Content;
