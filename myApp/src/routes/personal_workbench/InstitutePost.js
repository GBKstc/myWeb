/**
 * Created by Administrator on 2017/5/17.
 */
import React from 'react';
import { connect } from 'dva';
import { Table } from "antd";
import Panel from '../../components/Panel';
const dataSource = [
  {
    key: '1',
    file_type: '学院收文',
    sender: "李东",
    send_time: '2016-07-14',
    disposal_process: '转办',
    emergency_degree: '平件',
    file_header: '广东省教育厅关于公布学校安全教育微电影，微视频征集活动结果的通知',
  },{
    key: '2',
    file_type: '部门收文',
    sender: "李东",
    send_time: '2016-07-14',
    disposal_process: '办理',
    emergency_degree: '急件',
    file_header: '通知',
  },{
    key: '3',
    file_type: '部门收文',
    sender: "李东",
    send_time: '2015-10-23',
    disposal_process: '办理',
    emergency_degree: '急件',
    file_header: '关于做好2015年“广东特支计划教学名师”申报工作的通知',
  },{
    key: '4',
    file_type: '部门收文',
    sender: "李东",
    send_time: '2015-7-22',
    disposal_process: '办理',
    emergency_degree: '平件',
    file_header: '关于表彰我院参加省第九届大学生运动会获奖运动员和有贡献单位的通知',
  },{
    key: '5',
    file_type: '部门收文',
    sender: "李东",
    send_time: '2015-03-14',
    disposal_process: '办理',
    emergency_degree: '急件',
    file_header: '关于外语与经济贸易学院新办公室装修相关事宜的申请（续）',
  },{
    key: '6',
    file_type: '部门收文',
    sender: "李东",
    send_time: '2015-01-01',
    disposal_process: '办理',
    emergency_degree: '急件',
    file_header: '关于表彰李芊同学带领的王者荣耀“顶呱呱女子战队”参加比赛获省一等奖的通知',
  },

];
const columns = [
  {
    title: '文件类型',
    dataIndex: 'file_type',
    key: 'file_type',
    width: '10%',
  }, {
    title: '发送人',
    dataIndex: 'sender',
    key: 'sender',
    width: '10%',
  }, {
    title: '发送时间',
    dataIndex: 'send_time',
    key: 'send_time',
    width: '10%',
  }, {
    title: '处理环节',
    dataIndex: 'disposal_process',
    key: 'disposal_process',
    width: '10%',
  }, {
    title: '紧急程度',
    dataIndex: 'emergency_degree',
    key: 'emergency_degree',
    width: '10%',
    render: text => {
      return text==="急件"?<p style={{"color":"red"}}>!{text}</p>:text;
    }
  }, {
    title: '文件标题',
    dataIndex: 'file_header',
    key: 'file_header',
    width: '40%',
  }
];
const InstitutePost = ({ dispatch, products }) => {

  return (
    <Panel
      title="个人工作台—待办文件"
    >
      <Table
        columns = {columns}
        dataSource = {dataSource}
        size="small"
        bordered
        pagination={false}
      />
    </Panel>
  );
};

// export default Products;
export default connect(({ example }) => ({
  example,
}))(InstitutePost);
