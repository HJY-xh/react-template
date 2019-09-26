import React from 'react';
import styles from './index.less';
import designConfig from '@/apis/design/config';
import router from 'umi/router';
import lodash from 'lodash';

class ALink extends React.Component {
  handleOnClick = () => {
    const { target, url, external } = this.props;
    if (external) {
      window.open(`${url}`);
      return;
    }
    if (target) {
      if (target === '_self') {
        window.location.href = `${window.location.protocol}//${window.location.host}${designConfig.prefix}${url}`;
        return;
      }
      if (target === '_blank') {
        window.open(`${window.location.protocol}//${window.location.host}${designConfig.prefix}${url}`);
        return;
      }
    }
    url && router.push(url);
  };

  render() {
    const { children, style = {}, block, onClick, className } = this.props;
    let s = lodash.merge({}, style);
    if (block) {
      s.display = 'block';
    } else {
      s.display = 'inline-block';
    }
    return (
      <div onClick={(e) => {
        e.preventDefault();
        onClick ? onClick() : this.handleOnClick();
        e.stopPropagation();
      }} className={`${styles['download-link']} ${className}`} style={s}>
        {children}
      </div>
    );
  }
}

export default ALink;
