import * as React from 'react';
import { connect } from 'dva';

export interface IIndexProps {
  playList: Object;
}

export interface IIndexState {
}

@connect(({playList}) => ({
  ...playList,
}))
class Index extends React.Component<IIndexProps, IIndexState> {
  constructor(props: IIndexProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    const {playList} = this.props;
    console.log('playList', playList);
    return (
      <div>
        songList
      </div>
    );
  }
}

export default Index;
