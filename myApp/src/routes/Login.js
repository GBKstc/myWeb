/**
 * Created by Administrator on 2017/5/23.
 */
import React from 'react'
import {Form,Input,Button,Icon,Col} from 'antd';
import styles from './Login.less';
import logo from "../images/logo.jpg";
import ewm from "../images/ewm.jpg";
const FormItem = Form.Item;

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isEem:false,
      buttonText:"登陆"
    };
    this.goTo=undefined;
  }

  componentWillMount() {

  }
  onClick(isBoon){
    if (isBoon){
      this.goTo = setTimeout(function () {
        window.location.href = "http://localhost:8000/#/PersonalWorkbench";
      },5000);
    }else{
      clearTimeout(this.goTo);
    }
    this.setState({
      isEem:isBoon,
    })
  }

  render() {
    return (
      <div className={styles.loginBg}>
        <div className={styles.loginWrapper}>
          <h1 className={styles.loginHeader}>清远职业OA管理系统</h1>
          <div className={styles.loginBody}>
            <Col span={10}>
              <img className={styles["left-image"]} src={logo}/>
            </Col>
            <Col span={1}>
              <div className={styles["center-line"]} ></div>
            </Col>
            <Col span={13}>
              {
                this.state.isEem?
                  <Form  className={styles["login-form"]}>
                    <img className={styles["ewm"]} src={ewm}/>
                    <FormItem className={styles["form-item"]}>
                      <Button style={{backgroundColor:"#404040",color:"#fff",border:"#404040 1px solid"}} type="primary" htmlType="submit" className={styles["login-form-button"]} onClick={this.onClick.bind(this,false)}>
                        返回账号登陆
                      </Button>
                    </FormItem>
                  </Form>
                  :
                  <Form  className={styles["login-form"]}>
                    <FormItem className={styles["form-item"]}>
                      <Input addonBefore={<Icon type="user" />} placeholder="用户名" />
                    </FormItem>
                    <FormItem className={styles["form-item"]}>
                      <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
                    </FormItem>
                    <div onClick={this.onClick.bind(this,true)} className={styles["text-onclick"]}>点击切换扫码登陆</div>
                    <FormItem className={styles["form-item"]}>
                      <Button style={{backgroundColor:"#404040",color:"#fff",border:"#404040 1px solid"}} type="primary" htmlType="submit" className={styles["login-form-button"]} >
                        <a href="/#/PersonalWorkbench">{this.state.buttonText}</a>
                      </Button>
                    </FormItem>
                  </Form>
              }
            </Col>
          </div>
        </div>
      </div>
    )
  }

}

export default LoginContainer
