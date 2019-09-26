import React from 'react';
import { Row, Col, Button, Input, Icon } from 'antd';
import styles from './index.less';

const Search = Input.Search;

class Index extends React.Component {
  render() {
    const { operation } = this.props;
    let searchOffset = 24;
    operation.buttons.forEach((button) => {
      searchOffset -= button.span || 2;
    });
    if (operation.search.show) {
      searchOffset -= operation.search.span;
    }
    return (
      <Row gutter={20} className={styles.box}>
        {
          operation.buttons.map((button, index) => {
            if (button.show)
              return <Col key={index} span={button.span || 2}>
                <Button
                  block={button.block || true}
                  htmlType={'button'}
                  type={button.btnType || 'primary'}
                  icon={button.icon}
                  onClick={(event) => {
                    typeof button.handleClick === 'function' && button.handleClick(event);
                  }}>
                  {button.text || '按钮'}
                </Button>
              </Col>;
            return null;
          })
        }
        {
          operation.search.show && <Col offset={searchOffset} span={operation.search.span || 8}>
            <Search
              prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }}/>}
              enterButton={'搜索'}
              placeholder={operation.search.placeholder || '请输入搜索关键字'}
              onChange={(e) => {
                operation.search.handleSearch(e.target.value);
              }}
            />
          </Col>
        }
      </Row>
    );
  }
}

export default Index;
