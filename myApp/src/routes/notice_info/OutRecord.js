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


class OutRecord extends React.Component{
  constructor(props){
    super(props);
    this.state={
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
        title: this.props.example.language["Name"],
        dataIndex: 'name',
        key: 'name',
        width: '30%',
      }, {
        title: this.props.example.language["Matter"],
        dataIndex: 'matter',
        key: 'matter',
        width: '40%',
      },
    ];
    return(
      <Panel
        title={this.props.example.language["OutRecord"]}
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
}))(OutRecord);
