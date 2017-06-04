/**
 * Created by Administrator on 2017/5/17.
 */
import React from 'react';
import { connect } from 'dva';
import { Table } from "antd";
import Panel from '../../components/Panel';

class InstitutePost extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const dataSource = [
      {
        key: '1',
        file_type: 'College received',
        sender: "Kyle",
        send_time: '2016-04-30',
        disposal_process: 'To handle',
        emergency_degree: 'Flat piece',
        file_header: 'Notice on class 2017,Australia,China and 2 civilized classes received in March',
      },{
        key: '2',
        file_type: 'College received',
        sender: "Krisy",
        send_time: '2017-04-22',
        disposal_process: 'To handle',
        emergency_degree: 'Emergency',
        file_header: 'Notice on Kyle\'s won the first prize of the most beautiful men\'s competition',
      },

    ];
    const columns = [
      {
        title: this.props.example.language["FileType"],
        dataIndex: 'file_type',
        key: 'file_type',
        width: '10%',
      }, {
        title: this.props.example.language["Sender"],
        dataIndex: 'sender',
        key: 'sender',
        width: '10%',
      }, {
        title: this.props.example.language["Sendtime"],
        dataIndex: 'send_time',
        key: 'send_time',
        width: '10%',
      }, {
        title: this.props.example.language["ProcessingLinks"],
        dataIndex: 'disposal_process',
        key: 'disposal_process',
        width: '10%',
      }, {
        title: this.props.example.language["EmergencyLevel"],
        dataIndex: 'emergency_degree',
        key: 'emergency_degree',
        width: '10%',
        render: text => {
          return text==="Emergency"?<p style={{"color":"red"}}>!{text}</p>:text;
        }
      }, {
        title: this.props.example.language["FileTitle"],
        dataIndex: 'file_header',
        key: 'file_header',
        width: '40%',
      }
    ];
    return (
      <Panel
        title={this.props.example.language["InstitutePost"]}
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

// export default Products;
export default connect(({ example }) => ({
  example,
}))(InstitutePost);
