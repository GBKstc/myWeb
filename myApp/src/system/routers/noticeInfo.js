import noticeInfo from '../../routes/notice_info/NoticeInfo';
import outRecord from '../../routes/notice_info/OutRecord';
import sendMail from '../../routes/notice_info/SendMail';
import haveSentMail from '../../routes/notice_info/HaveSentMail';


const childRoutes = [
  {
    path: 'OutRecord',
    getComponent(location,cb){
      require.ensure([], (require) => {
        cb(null, outRecord)
      })
    }
  },
  {
    path: 'SendMail',
    getComponent(location,cb){
      require.ensure([], (require) => {
        cb(null, haveSentMail)
      })
    }
  },
  {
    path: 'HaveSentMail',
    getComponent(location,cb){
      require.ensure([], (require) => {
        cb(null, sendMail)
      })
    }
  },
];

const NoticeInfo = {
  path: '/NoticeInfo',
  getComponent(location,cb){
    require.ensure([], (require) => {
      cb(null, noticeInfo)
    })
  },
  childRoutes:childRoutes
};
export default NoticeInfo;
