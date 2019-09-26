import React from 'react';
import { connect } from 'dva';
import { Icon, Layout, Menu } from 'antd';
import styles from './index.less';
import storeJS from 'store';
import router from 'umi/router';
import nameSpaces from '@/libs/nameSpaces';

const { Header } = Layout;
const { SubMenu } = Menu;

/*const { confirm } = Modal;*/

class BasicHeader extends React.Component {
  handleMenuClick = ({ item, key, keyPath, domEvent }) => {
    /*const user = storeJS.get('user');
    if (key === 'logout') {
      const { dispatch } = this.props;
      confirm({
        content: `确定注销用户【${user && user.user_name}】，并在注销成功后回到登录页面？`,
        okText: '确定注销',
        cancelText: '放弃',
        onOk() {
          dispatch({
            type: 'login/doAsyncLogout',
          }).then(res => {
            res && router.push('/login');
          });
        },
      });
    }*/
    router.push('/login');
  };

  render() {
    const user = storeJS.get('user');
    return (
      <Header className={styles.container}>
        <div className={styles.logo}>
          <div className={styles['logo-img']}/>
          <div className={styles['logo-text']}>hjy-xh前端模板-登录页</div>
        </div>
        <Menu
          mode="horizontal"
          className={styles.menus}
          onClick={this.handleMenuClick}
        >
          <SubMenu
            key="sub1"
            title={<span style={{ color: 'rgba(255,255,255)' }}><Icon
              type="user"/> <span>{user && user.user_name}</span></span>}
          >
            <Menu.Item key="logout"><Icon type="logout"/> 注销退出</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    );
  }
}

export default connect((state, dispatch) => {
  return {
    ...state[nameSpaces.global],
    dispatch,
  };
})(BasicHeader);


