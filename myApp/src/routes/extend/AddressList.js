/**
 * Created by Administrator on 2017/5/25.
 */
import React from 'react';
import { connect } from 'dva';
import { Table, Row, Col, Button, Modal } from "antd";
import Panel from '../../components/Panel';
import styles from "./AddressList.less"
const dataSource = [
  {
    name: 'Krisy',
    "Phone_number": '1314832029',
    "e-mail": "1472591613@qq.com",
  },{
    name: 'Allen',
    "Phone_number": '13530216342',
    "e-mail": "1351216320@qq.com",
  },{
    name: 'Kyle',
    "Phone_number": '13044321683',
    "e-mail": "1219032416@qq.com",
  },{
    name: 'Kria',
    "Phone_number": '13539042734',
    "e-mail": "809465743@qq.com",
  },
];
const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    width: '30%',
  }, {
    title: 'Phone_number',
    dataIndex: 'Phone_number',
    key: 'Phone_number',
    width: '30%',
  }, {
    title: 'e-mail',
    dataIndex: 'e-mail',
    key: 'e-mail',
    width: '40%',
  },
];

class AddressList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectedRowKeys:[],
      selectedRows:[],
    }
  }

  isModalChange(value){
    this.props.dispatch({
      type: 'example/isModalChange',
      payload:{
        isModal:value,
      }
    });
  }

  videoImage(){
    let {selectedRowKeys, selectedRows} = this.state;
    let res = [];
    for (let i in selectedRows){
      res.push(
        <Col span={8}>
          <div  className={styles.Video} >
            {selectedRows[i].name+this.props.example.language["Videoing"]}
          </div>
        </Col>
        )
    }
    return res
  }

  render(){
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRowKeys,
          selectedRows
        })
      },
      getCheckboxProps: record => ({

      }),
    };
    return(
      <Panel
        title={this.props.example.language["VideoCommunication"]}
        foot={
          <Row type="flex" justify="end" style={{marginTop: 2}}>
            <Button type="primary" onClick={this.isModalChange.bind(this,true)} disabled={!this.state.selectedRowKeys.length} style={{marginRight:8}}>{this.props.example.language["Confirm"]}</Button>
            <Button type="primary" disabled={!this.state.selectedRowKeys.length} >{this.props.example.language["Cancel"]}</Button>
          </Row>
        }
      >
        <Table
          columns = {columns}
          dataSource = {dataSource}
          size="small"
          bordered
          pagination={false}
          rowSelection={rowSelection}
        />
        <Modal
          title={this.props.example.language["Video"]+"..."}
          visible={this.props.example.isModal}
          onCancel={this.isModalChange.bind(this,false)}
          footer={null}
        >
          <Row>
            {this.videoImage()}
          </Row>
        </Modal>
      </Panel>
    )
  }
}

export default connect(({ example }) => ({
  example,
}))(AddressList);
