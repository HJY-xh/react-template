import { apis, fetch } from '@/apis/index';

export default {
  doSystemCode(key) {
    return fetch.post({
      url: apis.common.sys_dm,
      postData: {
        'sysdm_key': key,
      },
    });
  },
  doMenus() {
    return fetch.post({
      url: apis.user.menuauths,
      postData: {
        'res_type': '01',
      },
    });
  },
};

