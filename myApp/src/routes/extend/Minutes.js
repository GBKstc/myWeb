/**
 * Created by Administrator on 2017/5/25.
 */
import React from 'react';
import { connect } from 'dva';
import { Table, Row, Col, Button } from "antd";
import Panel from '../../components/Panel';
const dataSource = [
  {
    date: '2017-05-04',
    file: ' ',
    opinion: " ",
  },{
    date: '2017-04-02',
    file: ' ',
    opinion: " ",
  },{
    date: '2017-03-22',
    file: ' ',
    opinion: " ",
  }
];
const columns = [
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
    width: '30%',
  }, {
    title: '文件',
    dataIndex: 'file',
    key: 'file',
    width: '30%',
  }, {
    title: '反馈/意见',
    dataIndex: 'opinion',
    key: 'opinion',
    width: '40%',
  },
];

class Minutes extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectedRowKeys:[],
    }
  }

  render(){
    return(
      <Panel
        title="会议记录"
      >
        <Table
          columns = {columns}
          dataSource = {dataSource}
          size="small"
          bordered
          pagination={false}
        />
      </Panel>
    )
  }
}

export default connect(({ minutes }) => ({
  minutes,
}))(Minutes);
