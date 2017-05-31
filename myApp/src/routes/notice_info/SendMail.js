/**
 * Created by Administrator on 2017/5/28.
 */
import React from 'react';
import { connect } from 'dva';
import { Table, Row, Col, Button, Input, Form } from "antd";
import Panel from '../../components/Panel';
const FormItem = Form.Item;
const dataSource = [
  {
    name: 'Krisy',
  },{
    name: 'Allen',
  },{
    name: 'Kyle',
  }
];
const columns = [
  {
    title: '联系人',
    dataIndex: 'name',
    key: 'name',
  },
];

class SendMail extends React.Component{
  constructor(props){
    super(props);
    this.onRowClick = this.onRowClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state={
      linkman_contacts:"",
      selectedRowKeys:[],
    };
    this.nameList = [];
  }

  onChange(e){
    let linkman_contacts = e.target.value;
    this.setState({
      linkman_contacts
    })
  }

  onRowClick(record, index){

    let name = record.name,
      {linkman_contacts} = this.state;
    for (let i in this.nameList){
      if(this.nameList[i]==name){
        name = "";
      }
    }
    if (name){
      linkman_contacts = linkman_contacts+name+";";
      this.nameList.push(name);
    }
    this.setState({
      linkman_contacts,
    })
  }

  onClick(){
    window.location.href = "http://localhost:8000/#/NoticeInfo/HaveSentMail";
  }

  render(){
    // const rowSelection = {
    //   onChange: (selectedRowKeys, selectedRows) => {
    //     //console.log(selectedRowKeys.length,selectedRows);
    //     this.setState({
    //       selectedRowKeys
    //     })
    //   },
    //   getCheckboxProps: record => ({
	//
    //   }),
    // };
    return(
      <Panel
        title="发送邮件"
        foot={
          <Row type="flex" justify="start" style={{marginTop: 2}}>
            <Button type="primary"  style={{marginRight:8}}>发送</Button>
            <Button type="primary"  style={{marginRight:8}}>定时发送</Button>
            <Button type="primary"  style={{marginRight:8}}>存草稿</Button>
            <Button type="primary"  onClick={this.onClick}>关闭</Button>
          </Row>
        }
      >
        <Row type="flex" justify={"start"}>
          <Col span={20}>
            <Row type="flex" justify={"start"} style={{margin:8}}>
              <Col span={2} style={{textAlign:"right",paddingRight:7}} >收件人:</Col>
              <Col span={22}>
                <Input size="small" style={{"width":"100%"}} value={this.state.linkman_contacts} onChange={this.onChange}/>
              </Col>
            </Row>
            <Row type="flex" justify={"start"} style={{margin:8}}>
              <Col span={2} style={{textAlign:"right",paddingRight:7}} >主题:</Col>
              <Col span={22}>
                <Input size="small" style={{"width":"100%"}}/>
              </Col>
            </Row>
            <Row type="flex" justify={"start"} style={{margin:8}}>
              <Col span={2} style={{textAlign:"right",paddingRight:7}} >正文:</Col>
              <Col span={22}>
                <Input size="small" type="textarea" autosize={{ "minRows":8, "maxRows": 8 }} style={{"width":"100%"}}/>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            {/*<Panel*/}
              {/*foot={*/}
                {/*<Row type="flex" justify="start" style={{marginTop: 2}}>*/}
                  {/*<Button type="primary" disabled={!this.state.selectedRowKeys.length}  style={{marginRight:8}}>确定</Button>*/}
                  {/*<Button type="primary" disabled={!this.state.selectedRowKeys.length}  >取消</Button>*/}
                {/*</Row>*/}
              {/*}*/}
            {/*>*/}
              <Table
                columns = {columns}
                dataSource = {dataSource}
                size="small"
                bordered
                pagination={false}
                onRowClick={this.onRowClick}
              />
            {/*</Panel>*/}
          </Col>
        </Row>
      </Panel>
    )
  }
}

export default connect(({ example }) => ({
  example,
}))(SendMail);
