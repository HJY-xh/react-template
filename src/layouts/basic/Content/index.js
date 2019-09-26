import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import BasicBreadcrumbs from '@/layouts/basic/Breadcrumbs';
import styles from './index.less';
import nameSpaces from '@/libs/nameSpaces';

const { Content } = Layout;

class BasicContent extends React.Component {
  render() {
    const { children, pathname } = this.props;
    if (pathname === '/home') {
      return (
        <Scrollbars style={{ width: '100%', height: '100%' }}>
          <Layout style={{ padding: '24px', minHeight: '100%' }}>
            <Content className={styles['content-home']}>
              {children}
            </Content>
          </Layout>
        </Scrollbars>
      );
    }
    if (pathname === '/statics') {
      return (
        <Scrollbars style={{ width: '100%', height: '100%' }}>
          <Layout style={{ padding: '0 24px 24px', height: '100%' }}>
            <BasicBreadcrumbs/>
            <Content className={styles['content-auto-height']}>
              {children}
            </Content>
          </Layout>
        </Scrollbars>
      );
    }
    return (
      <Scrollbars style={{ width: '100%', height: '100%' }}>
        <Layout style={{ padding: '0 24px 24px', height: '100%' }}>
          <BasicBreadcrumbs/>
          <Content className={styles.content}>
            {children}
          </Content>
        </Layout>
      </Scrollbars>
    );
  }
}

export default connect((state, dispatch) => {
  return {
    ...state[nameSpaces.global],
    dispatch,
  };
})(BasicContent);


