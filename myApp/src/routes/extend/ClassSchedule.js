/**
 * Created by Administrator on 2017/5/25.
 */
import React from 'react';
import { connect } from 'dva';
import { Table, Row, Col, Button } from "antd";
import Panel from '../../components/BaseUIWidget/Panel';


class ClassSchedule extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    const dataSource = [
      {
        section: this.props.example.language["1-2"],
        Monday: '',
        Tuesday: '',
        Wednesday: "International Business Law",
        Thursday: "International Business Law",
        Friday: "Electronic Commerce",
      },{
        section: this.props.example.language["3-4"],
        Monday: 'ADM',
        Tuesday: 'CMM',
        Wednesday: "ADM",
        Thursday: "LDR",
        Friday: "RES",
      },{
        section: this.props.example.language["5-6"],
        Monday: '',
        Tuesday: 'LED',
        Wednesday: "",
        Thursday: " ",
        Friday: "Music",
      },{
        section: this.props.example.language["7-8"],
        Monday: '',
        Tuesday: '',
        Wednesday: "",
        Thursday: "CMM",
        Friday: "",
      },{
        section: this.props.example.language["9-10"],
        Monday: '',
        Tuesday: '',
        Wednesday: "",
        Thursday: " ",
        Friday: "Dance",
      },
    ];
    const columns = [
      {
        title: this.props.example.language["Lesson"]+'\\'+this.props.example.language["Week"],
        dataIndex: 'section',
        key: 'section',
        width: '15%',
      }, {
        title: this.props.example.language["Monday"],
        dataIndex: 'Monday',
        key: 'Monday',
        width: '17%',
      }, {
        title: this.props.example.language["Tuesday"],
        dataIndex: 'Tuesday',
        key: 'Tuesday',
        width: '17%',
      },{
        title: this.props.example.language["Wednesday"],
        dataIndex: 'Wednesday',
        key: 'Wednesday',
        width: '17%',
      },{
        title: this.props.example.language["Thursday"],
        dataIndex: 'Thursday',
        key: 'Thursday',
        width: '17%',
      },{
        title: this.props.example.language["Friday"],
        dataIndex: 'Friday',
        key: 'Friday',
        width: '17%',
      },

    ];
    return(
      <Panel
        title={this.props.example.language["MySchedule"]}
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
}))(ClassSchedule);
