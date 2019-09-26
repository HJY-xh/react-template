import axios from 'axios';
import qs from 'qs';
import cookies from 'react-cookies';

let webConf = {
  _pltfm: '01',
  _channel: '01',
};
axios.defaults.timeout = 5000; // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';  //配置请求头
axios.defaults.baseURL = '';   //配置接口地址

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  // 在发送请求之前做某件事
  if (config.method === 'get') {
    config.data = qs.stringify(config.data);
  }
  if (config.method === 'post') {
    config.data = JSON.stringify(config.data);
  }
  config.headers._pltfm = webConf._pltfm;
  config.headers._channel = webConf._channel;
  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
  let token = cookies.load('token');
  if (token) {
    config.headers.token = token;
  }
  return config;
}, (error) => {
  console.log('请求提交时，发生错误：', error);
  return Promise.reject(error);
});
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  // 对响应数据做些事
  /*if (res.data.code === 1) {
    console.log('response', res.data.msg)
    return Promise.reject(res)
  }*/
  return res;
}, (error) => {
  console.log('请求返回时，发生错误：', error);
  return Promise.reject(error);
});

export default axios;
