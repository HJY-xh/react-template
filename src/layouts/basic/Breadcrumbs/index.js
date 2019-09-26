import React from 'react';
import { connect } from 'dva';
import { Breadcrumb } from 'antd';
import styles from './index.less';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import nameSpaces from '@/libs/nameSpaces';

const routes = [
  { path: '/', breadcrumb: '' },
  { path: '/home', breadcrumb: '控制台' },
];

class BasicBreadcrumbs extends React.Component {

  render() {
    const { breadcrumbs } = this.props;
    return (
      <Breadcrumb className={styles.container}>
        {breadcrumbs.map((breadcrumb, index) => {
          if (index < breadcrumbs.length - 1) {
            return <Breadcrumb.Item key={breadcrumb.match.url}>{breadcrumb.breadcrumb}</Breadcrumb.Item>;
          } else if (breadcrumb.location.state) {
            return <Breadcrumb.Item
              key={breadcrumb.match.url}>{breadcrumb.location.state.breadcrumbName}</Breadcrumb.Item>;
          }
          return null;
        })}
      </Breadcrumb>
    );
  }
}

const WidthBasicBreadcrumbs = withBreadcrumbs(routes)(BasicBreadcrumbs);
export default connect((state, dispatch) => {
  return {
    ...state[nameSpaces.global],
    dispatch,
  };
})(WidthBasicBreadcrumbs);


