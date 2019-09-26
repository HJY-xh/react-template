import nameSpaces from '@/libs/nameSpaces';
import commonState from '@/libs/commonState';

export default {
  namespace: nameSpaces.template,
  state: {
    dataReady: false,
  },
  reducers: {
    ...commonState.reducers,
  },
  effects: {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, query }) => {
        if (pathname === '/template') {
          dispatch({
            type: 'doState',
            payload: {
              dataReady: false,
            },
          });
          dispatch({
            type: `${nameSpaces.global}/doNProgress`,
            payload: {
              nprogress: 0,
            },
          });
          setTimeout(() => {
            dispatch({
              type: 'doState',
              payload: {
                dataReady: true,
              },
            });
            dispatch({
              type: `${nameSpaces.global}/doNProgress`,
              payload: {
                nprogress: 100,
              },
            });
          }, 5000);
        }
      });
    },
  },
};
