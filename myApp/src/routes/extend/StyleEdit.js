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
    this.styleChange = this.styleChange.bind(this);
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

  styleChange(value){
    this.props.dispatch({
      type: 'example/styleChange',
      payload:{
        style:value,
      }
    });
  }

  render(){
    return(
      <Panel
        title={this.props.example.language["StyleAndLanguageSettings"]}
      >
        <Row type="flex">
          <Col span={12}>
            <Row>
              <Col span={4}>{this.props.example.language["LanguageSettings"]}</Col>
              <Col span={20}>
                <Button type={this.props.example.languageType=="English"?"primary":null} style={{marginRight:20,marginLeft:50,}} onClick={this.changeLanguage.bind(this,"English")}>English</Button>
                <Button type={this.props.example.languageType=="Chinese"?"primary":null} onClick={this.changeLanguage.bind(this,"Chinese")}>中文</Button>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Col span={4}>{this.props.example.language["StyleSettings"]}</Col>
            <Col span={20}>
              <Button type={this.props.example.styleChange=="dark"?"primary":null} style={{marginRight:20,marginLeft:50,}} onClick={this.styleChange.bind(this,"dark")}>Dark</Button>
              <Button type={this.props.example.styleChange=="light"?"primary":null} onClick={this.styleChange.bind(this,"light")}>Light</Button>
            </Col>
          </Col>
        </Row>
      </Panel>
    )
  }
}

export default connect(({ example }) => ({
  example
}))(StyleEdit);
