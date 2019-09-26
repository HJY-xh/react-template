import moment from 'moment';

export default {
  isDevelopment: process.env.NODE_ENV === 'development',
  startPage: '/',
  loginPage: '/login',
  primaryColor: '#5D6BEA',
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
  dateFormat: 'YYYY-MM-DD',
  timeFormat: 'HH:mm:ss',
  pagination: {
    total: 0,
    pageSize: 10,
    pageNum: 1,
  },
  formItemLayout: {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 },
    },
  },
  tailFormItemLayout: {
    wrapperCol: { span: 18, offset: 6 },
  },
  buttonText: {
    createText: '确认新增',
    updateText: '确认修改',
    deleteText: '确认删除',
    cancelText: '放弃',
  },
  getToday() {
    return moment().format(this.dateFormat);
  },
  getNow() {
    return moment().format(this.timeFormat);
  },
  getDateTime() {
    return moment().format(this.datetimeFormat);
  },
  createSuccess: (text = '') => {
    return `${text}创建成功`;
  },
  updateSuccess: (text = '') => {
    return `${text}更新成功`;
  },
  deleteSuccess: (text = '') => {
    return `${text}删除成功`;
  },
};
