import fileMangement from '../../routes/file_management/FileMangement';
//import institutePost from '../../routes/personal_workbench/InstitutePost';


//const childRoutes = [
//  {
//    path: 'InstitutePost',
//    getComponent(location,cb){
//      require.ensure([], (require) => {
//        cb(null, institutePost)
//      })
//    }
//  },
//];

const FileMangement = {
  path: '/FileMangement',
  getComponent(location,cb){
    require.ensure([], (require) => {
      cb(null, fileMangement)
    })
  },
  //childRoutes:childRoutes
};
export default FileMangement;
