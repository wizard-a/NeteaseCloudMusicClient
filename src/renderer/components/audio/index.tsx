import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import { Avatar } from 'antd';
import { getTimeStrBySeconds } from '@/utils/time';
import styles from './audio.less';

export interface AudioProps {
  className?: string;
  src: string;
  /**
   * 是否显示工具栏
   */
  controls?: boolean;

  autoPlay?: boolean;
  /**
   * 歌名
   */
  name?: string;
  /**
   * 歌手名
   */
  songName?: string;

  /**
   * 歌背景图
   */
  songBg?: string;
  /**
   * 下一首
   */
  onNext?: () => void;

  /**
   * 上一首
   */
  onUp?: () => void;
}

export interface AudioState {
  /** 是否显示圆 */
  isRound?: boolean;
  isPlay?: boolean;
  /**
   * 进度
   */
  progress?: number;
  duration?: string;
  dotDrag?: boolean;
}

// const defaultProps = {
//   progress: 100,
// };

let interval = null;

const initState = {
  isRound: false,
  isPlay: false,
  progress: 0,
  duration: '00:00',
  dotDrag: false,
};

class Audio extends Component<AudioProps, AudioState> {

  audio: React.RefObject<HTMLAudioElement>;
  slider: React.RefObject<HTMLDivElement>;
  dotDart: boolean;

  static defaultProps = {
    autoPlay: false,
    onNext: () => { },
    onUp: () => { }
  }

  constructor(props: AudioProps) {
    super(props);
    this.audio = React.createRef();
    this.slider = React.createRef();
    this.state = initState;
  }

  // static defaultProps: AudioProps = {
  //   autoPlay: true,
  // }

  componentDidMount() {
    // console.log(this.audio.current.play());
  }

  componentWillReceiveProps(newProps) {
    if (newProps.src && newProps.src !== this.props.src) {
      console.log('newProps.src', newProps.src);
      this.changeUrl(newProps.src);
    }
  }

  changeUrl = (src: string) => {
    this.audio.current.src = src;
    this.setState({ ...initState });
    // setTimeout(() => {
    //   this.play();
    // }, 0);
  }

  play = () => {
    const playPromise = this.audio.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.setState({
            isPlay: true,
            duration: getTimeStrBySeconds(this.getDuration()),
          });
          // console.log("audio played auto");
          this.beginInterval();
        })
        .catch(() => {
          // console.log("playback prevented");
        });
    }
  }

  getDuration = () => {
    return parseInt(this.audio.current.duration.toString(), 10);
  }

  updateProgress = () => {
    const progress = this.getProgress();
    if (progress === 100) {
      this.setState({
        isPlay: false,
        progress: 100,
      });
      return;
    }
    this.setState({
      progress: progress as number,
    });
  }

  /**
   * 获取播放进度
   */
  getProgress = () => {
    const audio = this.audio.current;
    if (!audio.duration) {
      return 1;
    }
    // console.log('aaaaaa', audio.currentTime, audio.duration);
    const progress = (audio.currentTime / audio.duration) * 100;
    return progress > 1 ? progress : 1;
  }

  pause = () => {
    this.setState({
      isPlay: false,
    });
    this.audio.current.pause();
    this.updateProgress();
    this.destroyInterval();
  }


  beginInterval = () => {
    interval = setInterval(() => {
      this.updateProgress();
    }, 1000);
  }

  destroyInterval = () => {
    if (interval) {
      clearInterval(interval);
    }
  }

  componentWillUnmount() {
    this.destroyInterval();
  }

  handlePlayOrStop = () => {
    const { isPlay } = this.state;
    if (isPlay) {
      this.pause();
    } else {
      this.play();
    }
  }

  handleMouseEnter = () => {
    this.setState({
      isRound: true,
    });
  }

  handleMouseLeave = () => {
    this.setState({
      isRound: false,
    });
    this.handleMouseUp();
  }

  setSliderProgress = (e: React.MouseEvent) => {
    const slider = this.slider.current;
    const diffWidth = (window.innerWidth - slider.offsetWidth) / 2;
    const sliderWidth = e.clientX - diffWidth;
    // console.log('sliderWidth', sliderWidth, slider.offsetWidth)
    let progress = (sliderWidth / slider.offsetWidth) * 100;

    if (progress > 99) {
      progress = 100;
    }
    this.setState({
      progress: progress as number,
    });
  }

  updateDuration = () => {
    const { progress } = this.state;
    const audio = this.audio.current;
    const proportion = progress / 100;
    audio.currentTime = audio.duration * proportion;
  }

  getCurrTime = (): number => {
    const audio = this.audio.current;
    if (!audio) {
      return 0;
    }
    const { progress } = this.state;
    const proportion = progress / 100;
    return parseInt((audio.duration * proportion).toString(), 10);
  }

  handleSliderClick = (e: React.MouseEvent) => {
    this.destroyInterval();
    this.setSliderProgress(e);
    setTimeout(() => {
      this.beginInterval();
      this.updateDuration();
    });
  }

  handleDotMouseDown = () => {
    this.dotDart = true;
  }

  handleMouseMove = (e: React.MouseEvent) => {
    if (this.dotDart) {
      this.setSliderProgress(e);
    }
  }

  handleMouseUp = () => {
    if (this.dotDart) {
      this.dotDart = false;
      this.updateDuration();
    }
  }

  handleCanPlay = () => {
    console.log('---play---')
    this.play();
  }

  /**
   * 当前音乐播放完毕
   */
  handleEnded = () => {
    this.handleNext();
  }

  /** 上一首 */
  handleUp = () => {
    this.props.onUp();
  }

  /** 下一首 */
  handleNext = () => {
    this.props.onNext();
  }

  render() {

    const { src, controls, autoPlay, className, name, songName, songBg } = this.props;
    const { isRound, isPlay, progress, duration } = this.state;
    // console.log('isplay', isPlay, src, currTime);
    const classNames = classnames(styles.audio, className);
    const currTimeStr = getTimeStrBySeconds(this.getCurrTime());
    return (
      <div className={classNames}>
        <div
          ref={this.slider}
          className={styles.progressContainer}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
          onClick={this.handleSliderClick}
        >
          <div className={styles.wrapper} />
          <div style={{ width: `${progress || 0}%` }} className={styles.progress} />
          {
            isRound && <div
              onMouseDown={this.handleDotMouseDown}
              style={{ marginLeft: `${progress || 0}%` }}
              className={styles.round} />
          }
        </div>

        <div className={styles.info}>
          {songBg ?
            <Avatar shape='square' src={songBg} size={40} /> :
            <Avatar shape='square' size={40} icon='user' />}

          <div className={styles.title}>
            <div className={styles.top}>
              <span className={styles.name}>{name}</span>
              <span className={styles.singer}> - {songName}</span></div>
            <div className={styles.bottom}>
              <span>{currTimeStr} / {duration}</span>
            </div>
          </div>
        </div>
        <div className={styles.toolbar}>
          <Icon type='icon-love-b' />
          <Icon onClick={this.handleUp} style={{ color: '#c3463a' }} type='icon-sound-up' />
          <div className={styles.round}>
            <Icon onClick={this.handlePlayOrStop} type={`${isPlay ? 'icon-stop' : 'icon-play'}`} />
          </div>
          <Icon onClick={this.handleNext} style={{ color: '#c3463a' }} type='icon-sound-next' />
          <Icon type='icon-share' />
        </div>
        <div className={styles.controls}>
          <div className={styles.content}>
            <Icon type='icon-random' />
            <Icon type='icon-play-list' />
            <Icon type='icon-word' />
            <Icon type='icon-volume' />
          </div>
        </div>
        <audio ref={this.audio} onEnded={this.handleEnded} onCanPlay={this.handleCanPlay} autoPlay={autoPlay} src={src}>
          您的浏览器不支持audio
        </audio>
      </div>
    );
  }
}

export default Audio;
