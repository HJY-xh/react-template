import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import lodash from 'lodash';
import service from '@/services';
import nameSpaces from '@/libs/nameSpaces';
import commonState from '@/libs/commonState';

export default {
  namespace: nameSpaces.global,
  state: {
    scrollbars: null,
    pageLoading: true,
    nprogress: 0,
    pathname: '',
    menuData: [],
    openKeys: [],
    selectedKeys: [],
    defaultSelectedKeys: [],
    defaultOpenKeys: [],
  },
  reducers: {
    ...commonState.reducers,
    doNProgress(state, { payload }) {
      if (payload.nprogress < 100) {
        NProgress.start();
      } else {
        NProgress.done();
      }
      return lodash.merge({}, state, payload);
    },
    doMenus(state, { payload }) {
      const findActiveMenu = (_menus, pathname) => {
        _menus.children.forEach(menu => {
          if (menu.children && menu.children.length > 0) {
            findActiveMenu(menu, pathname);
          } else {
            if (menu.data.menu_url === pathname) {
              state.openKeys = [_menus.id.toString() || menu.id.toString()];
              state.defaultOpenKeys = [_menus.id.toString() || menu.id.toString()];
              state.defaultSelectedKeys = [menu.id.toString()];
              state.selectedKeys = [menu.id.toString()];
            }
          }
        });
      };
      findActiveMenu({ children: payload.menuData }, state.pathname);
      const menus = payload.menuData && payload.menuData.length > 0 && payload.menuData[0].children || [];
      const rootSubmenuKeys = menus.map(menu => {
        return menu.children && menu.children.length > 0 && menu.id.toString();
      }).filter(m => m);
      state.menuData = payload.menuData;
      state.rootSubmenuKeys = rootSubmenuKeys;
      return lodash.merge({}, state);
    },
  },
  effects: {
    * doAsyncMenus({ payload }, { call, put }) {
      const data = yield call(service.doMenus, payload);
      if (data.code === 0) {
        yield put({
          type: 'doMenus',
          payload: {
            menuData: data.data,
          },
        });
        return true;
      }
      return false;
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, query }) => {
        dispatch({
          type: 'doState',
          payload: {
            pathname: pathname.toString().toLowerCase(),
          },
        });
      });
    },
  },
};
