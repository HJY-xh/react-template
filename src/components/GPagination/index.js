import React from 'react';
import { Pagination } from 'antd';
import style from './index.less';


class Index extends React.Component {
  handleSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

  handleChange = (page, pageSize) => {
    const { doPageChange } = this.props;
    doPageChange({
      pageNum: page,
      pageSize: pageSize,
    });
  };

  render() {
    const { pagination, showTotal } = this.props;
    return (
      <div className={style.box}>
        <Pagination
          showTotal={showTotal ? (total, range) => `第${range[0]}-${range[1]}条，共 ${total} 条` : null}
          onShowSizeChange={this.handleSizeChange}
          onChange={this.handleChange}
          current={pagination.pageNumber}
          total={pagination.totalCount}/>
      </div>
    );
  }
}

export default Index;
