import { queryNotices } from '../services/api';

export default {
  namespace: 'global',

  state: {
    originalUrl: '',
  },

  effects: {
    *getOriginalUrl(_, { call, put }) {
      const urlParams = new URL(window.location.href);
      let url = '/';
      if (urlParams.hash) {
        url = urlParams.hash.replace('/^#/', '');
      }
      console.info('getOriginalUrl: ', url);
      yield put({
        type: 'saveOriginalUrl',
        payload: url,
      });
    },
  },

  reducers: {
    saveOriginalUrl(state, { payload }) {
      return {
        ...state,
        originalUrl: payload,
      };
    },
  },

  subscriptions: {
    setup({ history }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname, search }) => {
        if (typeof window.ga !== 'undefined') {
          window.ga('send', 'pageview', pathname + search);
        }
      });
    },
  },
};
