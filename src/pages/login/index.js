import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import nameSpaces from '@/libs/nameSpaces';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import logger from '@/libs/logger';
import router from 'umi/router';

class Login extends React.Component {
  state = {
    user_code: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        logger.consoleLogger({
          message: 'login forms:',
          content: {
            values,
          },
        });
        router.push('/home');
      }
    });
  };

  render() {
    const { user_code } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={`${styles.container}`}>
        <div className={styles.box}>
          <div className={styles.logo}/>
          <div className={styles.name}>hjy-xh前端模板-登录页</div>
          <div className={styles.welcome}>您好，欢迎您<span>{user_code}</span>！</div>
          <Form className={styles['login-form']}>
            <Form.Item>
              {getFieldDecorator('user_code', {
                rules: [{ required: true, message: '用户名/登录账号不能为空' }],
              })(
                <Input
                  size={'large'}
                  prefix={<Icon type="user" style={{ color: 'rgba(255,255,255,.9)' }}/>}
                  placeholder="用户名/登录账号"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('user_pwd', {
                rules: [{ required: true, message: '用户密码不能为空' }],
              })(
                <Input
                  size={'large'}
                  prefix={<Icon type="lock" style={{ color: 'rgba(255,255,255,.9)' }}/>}
                  type="password"
                  placeholder="用户密码"
                />,
              )}
            </Form.Item>
            <Form.Item style={{ marginBottom: 10 }}>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住我</Checkbox>,
              )}
            </Form.Item>
            <Form.Item>
              <Button
                size={'large'}
                onClick={this.handleSubmit}
                type="primary"
                htmlType="submit"
                className={styles['login-form-button']}>
                登 录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(Login);
export default connect((state, dispatch) => {
  return {
    ...state[nameSpaces.global],
    ...state[nameSpaces.login],
    dispatch,
  };
})(LoginForm);
