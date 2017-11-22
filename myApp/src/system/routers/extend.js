import extend from '../../routes/extend/Extend';
import addressList from "../../routes/extend/AddressList";
import minutes from "../../routes/extend/Minutes";
import classSchedule from "../../routes/extend/ClassSchedule";
import styleEdit from "../../routes/extend/StyleEdit";


const childRoutes = [
  {
    path: 'AddressList',
    getComponent(location,cb){
      require.ensure([], (require) => {
        cb(null, addressList)
      })
    }
  },
  {
    path: 'Minutes',
    getComponent(location,cb){
      require.ensure([], (require) => {
        cb(null, minutes)
      })
    }
  },
  {
    path: 'ClassSchedule',
    getComponent(location,cb){
      require.ensure([], (require) => {
        cb(null, classSchedule)
      })
    }
  },
  {
    path: 'StyleEdit',
    getComponent(location,cb){
      require.ensure([], (require) => {
        cb(null, styleEdit)
      })
    }
  },
];

const Extend = {
  path: '/Extend',
  getComponent(location,cb){
    require.ensure([], (require) => {
      cb(null, extend)
    })
  },
  childRoutes:childRoutes
};
export default Extend;
