import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { Layout } from 'antd';
import BasicHeader from '@/layouts/basic/Header';
import BasicSlider from '@/layouts/basic/Slider';
import BasicContent from '@/layouts/basic/Content';
import nameSpaces from '@/libs/nameSpaces';

class BasicLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Layout className={styles.container}>
        <BasicHeader/>
        <Layout>
          <BasicSlider/>
          <BasicContent>{children}</BasicContent>
        </Layout>
      </Layout>
    );
  }
}

export default connect((state, dispatch) => {
  return {
    ...state[nameSpaces.global],
    dispatch,
  };
})(BasicLayout);
