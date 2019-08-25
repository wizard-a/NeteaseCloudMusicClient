import * as React from 'react';
import classnames from 'classnames';
import { connect } from 'dva';
import { Audio } from '@/components';
import { PlayData} from '@/schema/play';
import musicUrl from '@/assets/music.mp3';
import { playUp, playNext } from '@/utils/song';
import styles from './footer.less';

export interface IHeaderProps {
    className?: string;
    playData?: PlayData;
}

export interface IHeaderState {
}

@connect(({ playList }) => ({
  playData: playList.playData,
}))
class Footer extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);

    this.state = {
    };
  }

  getPlayUrl = () => {
    const {playData: {id}} = this.props;
    if (id) {
      return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
    }
    return '';
  }

  handleUp = () => {
    playUp();
  }

  handleNext = () => {
    console.log('next');
    playNext();
  }

  public render() {
    const { className, playData} = this.props;
    const classNames = classnames(styles.footer, className);
    console.log('playUrl', this.getPlayUrl());
    return (
      <div className={classNames}>
       <Audio
          name={playData.name}
          songBg={playData.songBg}
          songName={playData.songName}
          src={this.getPlayUrl()}
          controls
          onUp={this.handleUp}
          onNext={this.handleNext}
        />
        {/* <Audio src='https://music.163.com/song/media/outer/url?id=33894312.mp3' controls /> */}
        {/* <Audio src={musicUrl} controls /> */}
      </div>
    );
  }
}


export default Footer;
