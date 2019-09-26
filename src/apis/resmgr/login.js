import config from './config';

const prefix = '/sys';
export default {
  login: `${config.prefix}${prefix}/login`,
  logout: `${config.prefix}${prefix}/logout`,
  register: `${config.prefix}${prefix}/register`,
};
