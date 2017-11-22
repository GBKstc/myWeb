import personalWorkbench from '../../routes/personal_workbench/PersonalWorkbench';
import institutePost from '../../routes/personal_workbench/InstitutePost';


const childRoutes = [
  {
    path: 'InstitutePost',
    getComponent(location,cb){
      require.ensure([], (require) => {
        cb(null, institutePost)
      })
    }
  },
];

const PersonalWorkbench = {
  path: '/PersonalWorkbench',
  getComponent(location,cb){
    require.ensure([], (require) => {
      cb(null, personalWorkbench)
    })
  },
  childRoutes:childRoutes
};
export default PersonalWorkbench;
