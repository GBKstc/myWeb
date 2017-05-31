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
    "Phone_number": '1314832029',
    "e-mail": "1472591613@qq.com",
  },{
    name: 'Allen',
    "Phone_number": '13530216342',
    "e-mail": "1351216320@qq.com",
  },{
    name: 'Kyle',
    "Phone_number": '13044321683',
    "e-mail": "1219032416@qq.com",
  },{
    name: 'Kria',
    "Phone_number": '13539042734',
    "e-mail": "809465743@qq.com",
  },
];
const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    width: '30%',
  }, {
    title: 'Phone_number',
    dataIndex: 'Phone_number',
    key: 'Phone_number',
    width: '30%',
  }, {
    title: 'e-mail',
    dataIndex: 'e-mail',
    key: 'e-mail',
    width: '40%',
  },
];

class AddressList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectedRowKeys:[],
    }
  }

  render(){
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(selectedRowKeys.length,selectedRows);
        this.setState({
          selectedRowKeys
        })
      },
      getCheckboxProps: record => ({

      }),
    };
    return(
      <Panel
        title="视频通讯"
        foot={
          <Row type="flex" justify="end" style={{marginTop: 2}}>
            <Button type="primary" disabled={!this.state.selectedRowKeys.length} style={{marginRight:8}}>确定</Button>
            <Button type="primary" disabled={!this.state.selectedRowKeys.length} >取消</Button>
          </Row>
        }
      >
        <Table
          columns = {columns}
          dataSource = {dataSource}
          size="small"
          bordered
          pagination={false}
          rowSelection={rowSelection}
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
}))(AddressList);
