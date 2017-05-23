import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute } from 'dva/router';

import LoginContainer from "./routes/Login";

import IndexPage from './routes/IndexPage';
import PersonalWorkbench from './routes/personal_workbench/PersonalWorkbench';
import InstitutePost from './routes/personal_workbench/InstitutePost';

import FileMangement from './routes/file_management/FileMangement';

import BussinessOffice from './routes/bussiness_office/BussinessOffice';

import NoticeInfo from "./routes/notice_info/NoticeInfo";

import Extend from "./routes/extend/Extend";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <IndexRoute component={PersonalWorkbench}/>
      <Route path="/Login" component={LoginContainer}>

      </Route>
      <Route path="/" component={IndexPage} >
        <IndexRedirect to="/Login" />
        <Route path="/PersonalWorkbench" component={PersonalWorkbench}>
          <Route path="/PersonalWorkbench/InstitutePost" component={InstitutePost}/>
        </Route>
        <Route path="/FileMangement" component={FileMangement}/>
        <Route path="/BussinessOffice" component={BussinessOffice}/>
        <Route path="/NoticeInfo" component={NoticeInfo}/>
        <Route path="/Extend" component={Extend}/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
