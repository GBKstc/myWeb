/**
 * Created by Administrator on 2017/5/25.
 */
import React from 'react';
import { connect } from 'dva';
import { Table, Row, Col, Button } from "antd";
import Panel from '../../components/Panel';
const dataSource = [
  {
    section: '第1-2节',
    Monday: '',
    Tuesday: '',
    Wednesday: "国际商法",
    Thursday: " ",
    Friday: "电子商务",
  },{
    section: '第3-4节',
    Monday: '会议管理',
    Tuesday: '口头报告',
    Wednesday: "会议管理",
    Thursday: "推广团队效益",
    Friday: "分析与展示研究信息",
  },{
    section: '第5-6节',
    Monday: '',
    Tuesday: '团队与个人发展',
    Wednesday: "",
    Thursday: " ",
    Friday: "毛泽东思想和中国特色社会主义理论体系",
  },{
    section: '第7-8节',
    Monday: '',
    Tuesday: '',
    Wednesday: "",
    Thursday: "口头报告",
    Friday: "",
  },{
    section: '第9-10节',
    Monday: '',
    Tuesday: '',
    Wednesday: "",
    Thursday: " ",
    Friday: "职业与创业教育就业指导",
  },
];
const columns = [
  {
    title: '节次\\星期',
    dataIndex: 'section',
    key: 'section',
    width: '15%',
  }, {
    title: '星期一',
    dataIndex: 'Monday',
    key: 'Monday',
    width: '17%',
  }, {
    title: '星期二',
    dataIndex: 'Tuesday',
    key: 'Tuesday',
    width: '17%',
  },{
    title: '星期三',
    dataIndex: 'Wednesday',
    key: 'Wednesday',
    width: '17%',
  },{
    title: '星期四',
    dataIndex: 'Thursday',
    key: 'Thursday',
    width: '17%',
  },{
    title: '星期五',
    dataIndex: 'Friday',
    key: 'Friday',
    width: '17%',
  },

];

class ClassSchedule extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    return(
      <Panel
        title="课表"
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

export default connect(({ classSchedule }) => ({
  classSchedule,
}))(ClassSchedule);
