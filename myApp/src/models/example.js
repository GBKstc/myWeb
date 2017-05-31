
const Chinese={
  "personal workbench":"个人工作台",
};
const English={
  "personal workbench":"personal workbench",
};

export default {

  namespace: 'example',

  state: {
    language:Chinese
  },

  reducers: {
    change(state, {payload}){
      if (payload.language === "English"){
        state = {...state ,language:English};
      }else {
        state = {...state ,language:Chinese};
      }
      return state;
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

};
