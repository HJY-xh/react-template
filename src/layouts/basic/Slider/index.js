import React from 'react';
import { connect } from 'dva';
import { Layout, Menu } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './index.less';
import Link from 'umi/link';
import { menus, rootSubmenuKeys } from '@/libs/menus';
import nameSpaces from '@/libs/nameSpaces';

const { SubMenu } = Menu;
const { Sider } = Layout;

class BasicSlider extends React.Component {

  onOpenChange = openKeys => {
    /*const { rootSubmenuKeys } = this.props;*/
    const latestOpenKey = openKeys && openKeys.length > 0 && openKeys[openKeys.length - 1], { dispatch } = this.props;
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      dispatch({
        type: 'global/doStateArray',
        payload: {
          key: 'openKeys',
          value: openKeys,
        },
      });
    } else {
      dispatch({
        type: 'global/doStateArray',
        payload: {
          key: 'openKeys',
          value: latestOpenKey ? [latestOpenKey] : [],
        },
      });
    }
  };
  onSelectChange = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/doStateArray',
      payload: {
        key: 'selectedKeys',
        value: selectedKeys,
      },
    });
  };

  componentWillMount() {
    /*const { dispatch } = this.props;
    dispatch({
      type: 'global/doAsyncMenus',
    });*/
  }

  render() {
    /*const { defaultSelectedKeys, defaultOpenKeys, openKeys, selectedKeys } = this.props;*/
    /*const menus = menuData && menuData.length > 0 && menuData[0].children || [];*/
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Scrollbars style={{ width: '100%', height: '100%' }}>
          <Menu
            mode="inline"
            className={styles.menus}
            /*onOpenChange={this.onOpenChange}
            onSelect={this.onSelectChange}
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            defaultSelectedKeys={defaultSelectedKeys}
            defaultOpenKeys={defaultOpenKeys}*/
          >
            {
              menus.map(menu => {
                if (menu.children && menu.children.length > 0) {
                  return <SubMenu
                    key={menu.key}
                    title={<span>{menu.icon} {menu.label}</span>}
                  >
                    {
                      menu.children.map(child => {
                        return <Menu.Item key={child.key}>
                          <Link
                            to={{ pathname: child.url, state: { breadcrumbName: child.label } }}>
                            {child.icon} {child.label}
                          </Link>
                        </Menu.Item>;
                      })
                    }
                  </SubMenu>;
                }
                return <Menu.Item key={menu.key}>
                  <Link
                    to={{ pathname: menu.url, state: { breadcrumbName: menu.label } }}>
                    {menu.icon} {menu.label}
                  </Link>
                </Menu.Item>;
              })
            }
            {/*{
              menus.map(menu => {
                if (menu.children && menu.children.length > 0) {
                  return <SubMenu
                    key={menu.id.toString()}
                    title={<span>{menu.data.menu_icon && <Icon type={menu.data.menu_icon}/>} {menu.title}</span>}
                  >
                    {
                      menu.children.map(child => {
                        return <Menu.Item key={child.id.toString()}>
                          <Link
                            to={{ pathname: child.data.menu_url, state: { breadcrumbName: child.title } }}>
                            {child.data.menu_icon && <Icon type={child.data.menu_icon}/>} {child.title}
                          </Link>
                        </Menu.Item>;
                      })
                    }
                  </SubMenu>;
                }
                return <Menu.Item key={menu.id.toString()}>
                  <Link
                    to={{ pathname: menu.data.menu_url, state: { breadcrumbName: menu.title } }}>
                    {menu.data.menu_icon && <Icon type={menu.data.menu_icon}/>} {menu.title}
                  </Link>
                </Menu.Item>;
              })
            }*/}
          </Menu>
        </Scrollbars>
      </Sider>
    );
  }
}

export default connect((state, dispatch) => {
  return {
    ...state[nameSpaces.global],
    dispatch,
  };
})(BasicSlider);


