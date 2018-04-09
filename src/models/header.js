export default {
  namespace: 'header',

  state: {
    current: 'home',
  },

  effects: {
    *setCurrent({ payload }, { _, put }) {
      yield put({
        type: 'setCurrentHeader',
        payload,
      });
    },
  },

  reducers: {
    setCurrentHeader(state, { payload }) {
      return {
        ...state,
        current: payload,
      };
    },
  },
};
