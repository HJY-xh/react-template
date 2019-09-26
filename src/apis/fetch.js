import axios from './base';
import { message } from 'antd';
import router from 'umi/router';
import cookies from 'react-cookies';
import storeJS from 'store';
import common from '@/libs/common';
import logger from '@/libs/logger';

function doLoading(isLoading, loadingText) {
  if (isLoading) {
    return message.loading(loadingText || '数据加载中', 0);
  }
  return null;
}

export default {
  get: async function(option) {
    let loadingClose = doLoading(option.loading, option.loadingText);
    const response = await axios.get(option.url, { params: option.postData });
    const data = response.data;
    message.destroy();
    if (data.code === 0) {
      logger.consoleLogger({ message: 'response data:', content: { option, data } });
    } else if (data.code === 401) {
      logger.consoleLogger({ message: 'response code=401:', content: { option, data } });
      if (cookies.load('token')) {
        cookies.remove('token', { path: '/' });
        storeJS.remove('user');
      }
      message.error('登录信息已失效，请重新登录！\n页面将在3秒后跳转至登录页。', 3,
        function() {
          router.push(common.loginPage);
        },
      );
    } else {
      data.msg && message.error(data.msg);
      logger.consoleLogger({ message: 'response code=1:', content: { option, data } });
    }
    loadingClose && loadingClose();
    return data;
  },
  post: async function(option) {
    let loadingClose = doLoading(option.loading, option.loadingText);
    const response = await axios.post(option.url, option.postData);
    const data = response.data;
    message.destroy();
    if (data.code === 0) {
      logger.consoleLogger({ message: 'response data:', content: { option, data } });
    } else if (data.code === 401) {
      logger.consoleLogger({ message: 'response code=401:', content: { option, data } });
      if (cookies.load('token')) {
        cookies.remove('token', { path: '/' });
        storeJS.remove('user');
      }
      message.error('登录信息已失效，请重新登录！\n页面将在3秒后跳转至登录页。', 3,
        function() {
          router.push(common.loginPage);
        },
      );
    } else {
      data.msg && message.error(data.msg);
      logger.consoleLogger({ message: 'response code=1:', content: { option, data } });
    }
    loadingClose && loadingClose();
    return data;
  },
};
