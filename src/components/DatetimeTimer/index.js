import React from 'react';
import styles from './index.less';
import common from '@/libs/common';

class DatetimeTimer extends React.Component {
  state = {
    datetime: '',
  };

  componentDidMount() {
    let self = this;
    this.timer = setInterval(
      () => {
        self.setState({
          datetime: common.getDateTime(),
        });
      },
      1000,
    );
  }

  componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearInterval(this.timer);
  }

  render() {
    return (
      <div className={styles.container} style={this.props.style}>
        {this.state.datetime}
      </div>
    );
  }
}

export default DatetimeTimer;
