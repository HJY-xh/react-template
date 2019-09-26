import nameSpaces from '@/libs/nameSpaces';
import commonState from '@/libs/commonState';

export default {
  namespace: nameSpaces.home,
  state: {},
  reducers: {
    ...commonState.reducers,
  },
  effects: {},
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },
};
