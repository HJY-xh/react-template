import lodash from 'lodash';

export default {
  state: {},
  reducers: {
    doState(state, { payload }) {
      return lodash.merge({}, state, payload);
    },
    doStateObject(state, { payload }) {
      state[payload.key] = payload.value;
      return lodash.merge({}, state);
    },
  },
  effects: {},
  subscriptions: {},
};
