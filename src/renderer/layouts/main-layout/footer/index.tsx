import * as React from 'react';
import classnames from 'classnames';
import { Audio } from '@/components';
import musicUrl from '@/assets/music.mp3';
import styles from './footer.less';

export interface IHeaderProps {
    className?: string;
}

export interface IHeaderState {
}

class Footer extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);

    this.state = {
    };
  }

  public render() {
    const { className} = this.props;
    const classNames = classnames(styles.footer, className);
    return (
      <div className={classNames}>
        {/* <Audio src='https://music.163.com/song/media/outer/url?id=33894312.mp3' controls /> */}
        <Audio src={musicUrl} controls />
      </div>
    );
  }
}


export default Footer;
