
import baseFeature from '../../routes/baseFeature/BaseFeature';
import staff from '../../routes/baseFeature/Staff';

const childRoutes = [
  {
    path: 'Staff',
    getComponent(location,cb){
      require.ensure([], (require) => {
        cb(null, staff)
      })
    }
  }
];

const BaseFeature = {
  path: '/BaseFeature',
  getComponent(location,cb){
    require.ensure([], (require) => {
      cb(null, baseFeature)
    })
  },
  childRoutes:childRoutes,
};
export default BaseFeature;
