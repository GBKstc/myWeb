/**
 * Created by Administrator on 2017/5/25.
 */
import React from 'react';
import { connect } from 'dva';
import { Table, Row, Col, Button } from "antd";
import Panel from '../../components/Panel';
const dataSource = [
  {
    name: 'Krisy',
    date: '2017-5-25',
    matter: "Meeting",
  },{
    name: 'Allen',
    date: '2017-5-22',
    matter: "Be invited to judge by NanHua School",
  },{
    name: 'Kyle',
    date: '2017-5-20',
    matter: "Be invited to judge by LingNan School",
  }
];
const columns = [
  {
    title: '时间',
    dataIndex: 'date',
    key: 'date',
    width: '30%',
  }, {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: '30%',
  }, {
    title: '事项',
    dataIndex: 'matter',
    key: 'matter',
    width: '40%',
  },
];

class OutRecord extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){

    return(
      <Panel
        title="外出记录"
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
export default connect(({ outRecord }) => ({
  outRecord,
}))(OutRecord);
