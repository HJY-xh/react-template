import React from 'react';
import ReactLoading from 'react-loading';
import common from '@/libs/common';
import styles from './index.less';

const Loading = ({ type, color }) => (
  <div className={styles.container}>
    <div className={styles['loading-box']}>
      <ReactLoading className={styles.loading}
                    type={type || 'spin'}
                    color={color || common.primaryColor}/>
      <div className={styles.text}>正在加载...</div>
    </div>
  </div>
);

export default Loading;
