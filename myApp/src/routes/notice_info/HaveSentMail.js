/**
 * Created by Administrator on 2017/5/28.
 */
import React from 'react';
import { connect } from 'dva';
import { Table, Row, Col, Button } from "antd";
import Panel from '../../components/Panel';
const dataSource = [
  {
    name: 'Krisy',
    date: '2017-5-25',
    title: "Meeting",
  },{
    name: 'Allen',
    date: '2017-5-22',
    title: "Be invited to judge by NanHua School",
  },{
    name: 'Kyle',
    date: '2017-5-20',
    title: "Be invited to judge by LingNan School",
  }
];
const columns = [
  {
    title: '收件人',
    dataIndex: 'name',
    key: 'name',
    width: '15%',
  }, {
    title: '主题',
    dataIndex: 'title',
    key: 'title',
    width: '75%',
  }, {
    title: '时间',
    dataIndex: 'date',
    key: 'date',
    width: '10%',
  },
];

class HaveSentMail extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){

    return(
      <Panel
        title="已发邮件"
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
// const AddressList = ({ dispatch, products }) => {
//
//   return (
//
//   );
// };

// export default Products;
export default connect(({ example }) => ({
  example,
}))(HaveSentMail);
