import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute } from 'dva/router';

import LoginContainer from "./routes/Login";

import IndexPage from './routes/IndexPage';
import PersonalWorkbench from './routes/personal_workbench/PersonalWorkbench';
import InstitutePost from './routes/personal_workbench/InstitutePost';

import FileMangement from './routes/file_management/FileMangement';

import BussinessOffice from './routes/bussiness_office/BussinessOffice';

import NoticeInfo from "./routes/notice_info/NoticeInfo";
import OutRecord from './routes/notice_info/OutRecord';
import SendMail from './routes/notice_info/SendMail';
import HaveSentMail from './routes/notice_info/HaveSentMail';

import Extend from "./routes/extend/Extend";
import AddressList from "./routes/extend/AddressList";
import Minutes from "./routes/extend/Minutes";
import ClassSchedule from "./routes/extend/ClassSchedule";
import StyleEdit from "./routes/extend/StyleEdit";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/Login" component={LoginContainer}>

      </Route>
      <Route path="/" component={IndexPage} >
        <IndexRoute component={PersonalWorkbench}/>
        <IndexRedirect to="/Login" />
        <Route path="/PersonalWorkbench" component={PersonalWorkbench}>
          <Route path="/PersonalWorkbench/InstitutePost" component={InstitutePost}/>
        </Route>
        <Route path="/FileMangement" component={FileMangement}/>
        <Route path="/BussinessOffice" component={BussinessOffice}/>
        <Route path="/NoticeInfo" component={NoticeInfo}>
          <Route path="/NoticeInfo/OutRecord" component={OutRecord}></Route>
          <Route path="/NoticeInfo/SendMail" component={SendMail}></Route>
          <Route path="/NoticeInfo/HaveSentMail" component={HaveSentMail}></Route>
        </Route>
        <Route path="/Extend" component={Extend}>
          <Route path="/Extend/AddressList" component={AddressList}></Route>
          <Route path="/Extend/Minutes" component={Minutes}></Route>
          <Route path="/Extend/ClassSchedule" component={ClassSchedule}></Route>
          <Route path="/Extend/StyleEdit" component={StyleEdit}></Route>
        </Route>
      </Route>
    </Router>
  );
}

export default RouterConfig;
