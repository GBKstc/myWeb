/**
 * Created by Administrator on 2017/5/25.
 */
import React from 'react';
import { connect } from 'dva';
import { Table, Row, Col, Button, Modal } from "antd";
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


class Minutes extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectedRowKeys:[],
    }
  }


  render(){
    const columns = [
      {
        title: this.props.example.language["Date"],
        dataIndex: 'date',
        key: 'date',
        width: '30%',
      }, {
        title: this.props.example.language["File"],
        dataIndex: 'file',
        key: 'file',
        width: '30%',
      }, {
        title: this.props.example.language["Opinion"],
        dataIndex: 'opinion',
        key: 'opinion',
        width: '40%',
      },
    ];
    return(
      <Panel
        title={this.props.example.language["MinutesForm"]}
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

export default connect(({ example }) => ({
  example,
}))(Minutes);
