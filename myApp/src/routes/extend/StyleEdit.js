/**
 * Created by Administrator on 2017/5/31.
 */
import React from 'react';
import { connect } from 'dva';
import { Table, Row, Col, Button } from "antd";
import Panel from '../../components/Panel';

class StyleEdit extends React.Component{
  constructor(props){
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.state={

    }
  }

  changeLanguage(value){
    this.props.dispatch({
      type: 'example/change',
      payload:{
        language:value,
      }
    });
  }

  render(){
    return(
      <Panel
        title="设置"
      >
        <Row type="flex">
          <Col span={12}>
            <Row>
              <Col span={4}>语言设置</Col>
              <Col span={20}>
                <Button style={{marginRight:20,marginLeft:50,}} onClick={this.changeLanguage.bind(this,"English")}>English</Button>
                <Button type="primary">中文</Button>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Col span={4}>样式设置</Col>
            <Col span={20}></Col>
          </Col>
        </Row>
      </Panel>
    )
  }
}

export default connect(({ example }) => ({
  example,
}))(StyleEdit);
