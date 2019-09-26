import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import nameSpaces from '@/libs/nameSpaces';

class LoginLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  }
}

export default connect((state, dispatch) => {
  return {
    ...state[nameSpaces.global],
    dispatch,
  };
})(LoginLayout);
