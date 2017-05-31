/**
 * Created by Administrator on 2017/5/25.
 */
import React from 'react';
import { connect } from 'dva';
import { Table, Row, Col, Button } from "antd";
import Panel from '../../components/Panel';


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
        Wednesday: "国际商法",
        Thursday: " ",
        Friday: "电子商务",
      },{
        section: this.props.example.language["3-4"],
        Monday: '会议管理',
        Tuesday: '口头报告',
        Wednesday: "会议管理",
        Thursday: "推广团队效益",
        Friday: "分析与展示研究信息",
      },{
        section: this.props.example.language["5-6"],
        Monday: '',
        Tuesday: '团队与个人发展',
        Wednesday: "",
        Thursday: " ",
        Friday: "毛泽东思想和中国特色社会主义理论体系",
      },{
        section: this.props.example.language["7-8"],
        Monday: '',
        Tuesday: '',
        Wednesday: "",
        Thursday: "口头报告",
        Friday: "",
      },{
        section: this.props.example.language["9-10"],
        Monday: '',
        Tuesday: '',
        Wednesday: "",
        Thursday: " ",
        Friday: "职业与创业教育就业指导",
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
