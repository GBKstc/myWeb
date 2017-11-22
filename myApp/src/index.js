
import dva from 'dva';
import './index.css';
const Chinese={
  "personal_workbench":"个人工作台",
};
const English={
  "personal_workbench":"personal workbench",
};

// 1. Initialize
const app = dva({
     initialState: {

     },
 });

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
