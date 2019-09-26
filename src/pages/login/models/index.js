import cookies from 'react-cookies';
import storeJS from 'store';
import { message } from 'antd';
import service from '@/pages/login/services';
import nameSpaces from '@/libs/nameSpaces';
import commonState from '@/libs/commonState';

export default {
  namespace: nameSpaces.login,
  state: {},
  reducers: {
    ...commonState.reducers,
  },
  effects: {
    * doAsyncLogin({ payload }, { call, put }) {
      const data = yield call(service.doLogin, payload);
      if (data.code === 0) {
        cookies.save('token', data.token, { path: '/' });
        storeJS.set('user', data.user);
        message.success('登录成功。');
        return true;
      }
      return false;
    },
    * doAsyncLogout({ payload }, { call, put }) {
      const data = yield call(service.doLogout, payload);
      if (data.code === 0) {
        cookies.remove('token', { path: '/' });
        storeJS.remove('user');
        message.success('退出登录成功。');
        return true;
      }
      return false;
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },
};
