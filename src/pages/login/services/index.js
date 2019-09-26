import { apis, fetch } from '@/apis';

export default {
  doLogin(form) {
    return fetch.post({
      url: apis.login.login,
      postData: form || {},
    });
  },
  doLogout(form) {
    return fetch.post({
      url: apis.login.logout,
      postData: form || {},
    });
  },
};
