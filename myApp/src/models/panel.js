/**
 * Created by Administrator on 2017/5/18.
 */
export default {
  namespace: 'panel',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
