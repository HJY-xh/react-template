import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import nameSpaces from '@/libs/nameSpaces';

class Home extends React.Component {
  render() {
    return (
      <div className={`${styles.container}`}>
        控制台
      </div>
    );
  }
}

export default connect((state, dispatch) => {
  return {
    ...state[nameSpaces.global],
    ...state[nameSpaces.home],
    dispatch,
  };
})(Home);
