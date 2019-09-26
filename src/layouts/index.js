import React from 'react';
import BasicLayout from '@/layouts/basic';
import LoginLayout from '@/layouts/login';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import { connect } from 'dva';
import Loading from '@/components/Loading';
import nameSpaces from '@/libs/nameSpaces';

class Layouts extends React.Component {
  render() {
    const { children, pageLoading, pathname } = this.props;
    if (pageLoading) {
      if (pathname === '/login') {
        return (
          <LocaleProvider locale={zhCN}>
            <LoginLayout>
              {children}
            </LoginLayout>
          </LocaleProvider>
        );
      }
      return (
        <LocaleProvider locale={zhCN}>
          <BasicLayout>
            {children}
          </BasicLayout>
        </LocaleProvider>
      );
    } else {
      return (
        <LocaleProvider locale={zhCN}>
          <Loading/>
        </LocaleProvider>
      );
    }
  }
}


export default connect((state, dispatch) => {
  return {
    ...state[nameSpaces.global],
    dispatch,
  };
})(Layouts);

