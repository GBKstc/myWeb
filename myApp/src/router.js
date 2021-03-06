import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute } from 'dva/router';

import LoginContainer from "./routes/Login";

import IndexPage from './routes/IndexPage';

import personalWorkbench from './routes/personal_workbench/PersonalWorkbench';
//import InstitutePost from './routes/personal_workbench/InstitutePost';

//import FileMangement from './routes/file_management/FileMangement';

//import BussinessOffice from './routes/bussiness_office/BussinessOffice';

//import NoticeInfo from "./routes/notice_info/NoticeInfo";
//import OutRecord from './routes/notice_info/OutRecord';
//import SendMail from './routes/notice_info/SendMail';
//import HaveSentMail from './routes/notice_info/HaveSentMail';

//import Extend from "./routes/extend/Extend";
//import AddressList from "./routes/extend/AddressList";
//import Minutes from "./routes/extend/Minutes";
//import ClassSchedule from "./routes/extend/ClassSchedule";
//import StyleEdit from "./routes/extend/StyleEdit";


import PersonalWorkbench from './system/routers/personalWorkbench';
import FileMangement from './system/routers/fileMangement';
import BussinessOffice from './system/routers/bussinessOffice';
import NoticeInfo from './system/routers/noticeInfo';
import Extend from './system/routers/extend';
import BaseFeature from './system/routers/baseFeature';
//function RouterConfig({ history }) {
//  return (
//    <Router history={history}>
//      <Route path="/Login" component={LoginContainer}>
//
//      </Route>
//      <Route path="/" component={IndexPage} >
//
//        <IndexRedirect to="/Login" />
//        <Route path="/PersonalWorkbench" component={PersonalWorkbench}>
//          <Route path="/PersonalWorkbench/InstitutePost" component={InstitutePost}/>
//        </Route>
//        <Route path="/FileMangement" component={FileMangement}/>
//        <Route path="/BussinessOffice" component={BussinessOffice}/>
//        <Route path="/NoticeInfo" component={NoticeInfo}>
//          <Route path="/NoticeInfo/OutRecord" component={OutRecord}></Route>
//          <Route path="/NoticeInfo/SendMail" component={SendMail}></Route>
//          <Route path="/NoticeInfo/HaveSentMail" component={HaveSentMail}></Route>
//        </Route>
//        <Route path="/Extend" component={Extend}>
//          <Route path="/Extend/AddressList" component={AddressList}></Route>
//          <Route path="/Extend/Minutes" component={Minutes}></Route>
//          <Route path="/Extend/ClassSchedule" component={ClassSchedule}></Route>
//          <Route path="/Extend/StyleEdit" component={StyleEdit}></Route>
//        </Route>
//      </Route>
//    </Router>
//  );
//}
function RouterConfig({ history }) {
  const routes = [
      {
        path: '/login',
        component:LoginContainer
      },
      {
        path: '/',
        component: IndexPage,
        indexRoute:{
          path:'/PersonalWorkbench',
          component: personalWorkbench,
        },
        childRoutes: [
          PersonalWorkbench,
          FileMangement,
          BussinessOffice,
          NoticeInfo,
          Extend,
          BaseFeature
        ],
      }
    ];

  return <Router history={history} routes={routes} />;
}
export default RouterConfig;
