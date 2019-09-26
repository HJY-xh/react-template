import config from './config';

const orgPrefix = '/org';
const org = {
  //权限
  author: `${config.prefix}${orgPrefix}/authorization`,
  //绑定用户到机构
  bindUserToOrg: `${config.prefix}${orgPrefix}/bindUser`,
  //可绑定的候选用户列表
  unbindUserList: `${config.prefix}${orgPrefix}/candidateBindUserList`,
  //删除
  delete: `${config.prefix}${orgPrefix}/delete`,
  //详情
  info: `${config.prefix}${orgPrefix}/info`,
  //机构列表
  list: `${config.prefix}${orgPrefix}/list`,
  //树型菜单
  trees: `${config.prefix}${orgPrefix}/menu`,
  //拥有的角色列表
  roles: `${config.prefix}${orgPrefix}/roles`,
  //添加
  add: `${config.prefix}${orgPrefix}/save`,
  //更新
  update: `${config.prefix}${orgPrefix}/update`,
  //用户列表
  userList: `${config.prefix}${orgPrefix}/userList`,
  //用户机构树型菜单
  userMenu: `${config.prefix}${orgPrefix}/userMenu`,
};

const menuPrefix = '/resmenu';
const menu = {
  //添加菜单
  add: `${config.prefix}${menuPrefix}/addresmenu`,
  //添加菜单（批量）
  add_multi: `${config.prefix}${menuPrefix}/addresmenus`,
  //查询单条菜单信息
  info: `${config.prefix}${menuPrefix}/findresmenuone`,
  //菜单带方法
  menu_fun: `${config.prefix}${menuPrefix}/menuFunction`,
  //获取用户资源菜单
  trees: `${config.prefix}${menuPrefix}/resmenulist`,
  //获取菜单分页
  list: `${config.prefix}${menuPrefix}/resmenupage`,
  //更新菜单
  update: `${config.prefix}${menuPrefix}/updateresmenu`,
  //修改菜单状态
  update_status: `${config.prefix}${menuPrefix}/updateresmenustatus`,
};

const userPrefix = '/user';
const user = {
  //权限
  user_authorization: `${config.prefix}${userPrefix}/authorization`,
  //绑定到机构
  user_bind_org: `${config.prefix}${userPrefix}/bindOrg`,
  //删除
  delete: `${config.prefix}${userPrefix}/delete`,
  //禁用
  disabled: `${config.prefix}${userPrefix}/disable`,
  //启用
  enabled: `${config.prefix}${userPrefix}/enable`,
  //批量导入 excel 用户
  import_excel: `${config.prefix}${userPrefix}/importExcelUsers`,
  //获取用户信息
  info: `${config.prefix}${userPrefix}/info`,
  //列表
  list: `${config.prefix}${userPrefix}/list`,
  //用户登录后获取菜单
  menu_auth: `${config.prefix}${userPrefix}/menuauths`,
  //加载公告
  notice: `${config.prefix}${userPrefix}/notice`,
  //拥有的角色列表
  roles: `${config.prefix}${userPrefix}/roles`,
  //添加
  add: `${config.prefix}${userPrefix}/save`,
  //更新
  update: `${config.prefix}${userPrefix}/update`,
  //设置主机构
  main_org: `${config.prefix}${userPrefix}/setMainOrg`,
  //设置主机构
  detail: `${config.prefix}${userPrefix}/detail`,
  //设置主机构
  modify: `${config.prefix}${userPrefix}/modify`,
  //设置主机构
  changeMdn: `${config.prefix}${userPrefix}/changeMdn`,
  //设置主机构
  change_password: `${config.prefix}${userPrefix}/changePassword`,
  //设置主机构
  login_logs: `${config.prefix}${userPrefix}/loginlogs`,
  menuauths: `${config.prefix}${userPrefix}/menuauths`,
};

const rolePrefix = '/role';
const role = {
  //角色信息
  info: `${config.prefix}${rolePrefix}/info`,
  //角色列表
  list: `${config.prefix}${rolePrefix}/list`,
  //保存角色
  add: `${config.prefix}${rolePrefix}/save`,
  update: `${config.prefix}${rolePrefix}/update`,
  delete: `${config.prefix}${rolePrefix}/delete`,
  author: `${config.prefix}${rolePrefix}/authorization`,
  user_list: `${config.prefix}${rolePrefix}/candidateAuthUserList`,
  org_list: `${config.prefix}${rolePrefix}/candidateAuthOrgList`,
};
export default {
  org,
  menu,
  user,
  role,
};
