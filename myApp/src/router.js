import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import PersonalWorkbench from './routes/personal_workbench/PersonalWorkbench';
import InstitutePost from './routes/personal_workbench/InstitutePost';

import FileMangement from './routes/file_management/FileMangement';

import BussinessOffice from './routes/bussiness_office/BussinessOffice';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} >
        <Route path="/PersonalWorkbench" component={PersonalWorkbench}>
          <Route path="/PersonalWorkbench/InstitutePost" component={InstitutePost}/>
        </Route>
        <Route path="/FileMangement" component={FileMangement}/>
        <Route path="/BussinessOffice" component={BussinessOffice}/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
