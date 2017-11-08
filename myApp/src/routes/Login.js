/**
 * Created by Administrator on 2017/5/23.
 */
import React from 'react'
import {Form,Input,Button,Icon,Col} from 'antd';
import styles from './Login.less';
import logo from "../images/logo.jpg";
import ewm from "../images/ewm.jpg";
import {Post,URL} from "../system/Post"
const FormItem = Form.Item;

class LoginContainerForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state={
      form:null
    };
  }

  componentWillMount() {

  }

  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(err, values);
      if(err=null){
        
      }

    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    return (
      <div className={styles.loginBg}>
        <div className={styles.loginWrapper}>
          <h1 className={styles.loginHeader}>Qingyuan Polytechnic</h1>
          <div className={styles.loginBody}>
            <Col span={10}>
              <img className={styles["left-image"]} src={logo}/>
            </Col>
            <Col span={1}>
              <div className={styles["center-line"]} ></div>
            </Col>
            <Col span={13}>
              <Form  className={styles["login-form"]} onSubmit={this.handleSubmit}>
                <FormItem className={styles["form-item"]}>
                  {getFieldDecorator('user', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="User" />
                  )}
                </FormItem>
                <FormItem className={styles["form-item"]}>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="Password" />
                  )}
                </FormItem>

                <FormItem className={styles["form-item"]}>
                  <Button  type="danger"  htmlType="submit" className={styles["login-form-button"]} >
                    Login
                  </Button>
                </FormItem>
              </Form>
            </Col>
          </div>
        </div>
      </div>
    )
  }

}
const LoginContainer = Form.create()(LoginContainerForm);
export default LoginContainer
