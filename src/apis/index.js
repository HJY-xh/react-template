import lodash from 'lodash';
import login from './resmgr/login';
import common from './resmgr/common';
import system from './resmgr/system';

export let fetch = require('./fetch').default;
export let apis = lodash.merge({}, {
  login,
  common,
  ...system,
});
