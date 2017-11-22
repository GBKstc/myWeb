import {message} from 'antd';
import {rootUrl} from '../config/serverConfig';
import {isEmpty} from '../utils/variable';

export const Post = (url, parameters) => {
  try {
    //生成http请求
    url = String(url);
    let newOptions = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post'
    };
    let form = '';
    for (let key in parameters) {
      let value = parameters[key];
      if (typeof value === 'object' || Array.isArray(value)) {
        value = JSON.stringify(value);
      }
      let item = key + '=' + encodeURIComponent(value);
      form = form.length == 0 ? form + item : form + '&' + item;
    }
    newOptions.body = form;
    return fetch(rootUrl + url, newOptions)
      .then(response => {
        if (response.status != 200) {
          message.error('请求错误!');
          throw 'post error';
        } else {
          return response.json();
        }
      })
      .then(json => {
        if (json.error == '1' || json.code == '1') {
          message.error(json.msg);
          throw json.msg;
        } else {
          return json.data;
        }
      });
  } catch(err) {
   console.log(err);
  } finally {

  }


};
export const URL = {
  'LOGIN':"userLogin",

  'StaffList':"staff_getStaffList",

  'AddStaff':"staff_addStaff",
};
