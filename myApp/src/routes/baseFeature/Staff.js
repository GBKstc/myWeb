
import React from 'react';
import { connect } from 'dva';
import { Table, Row, Col, Button, Modal } from "antd";
import Panel from '../../components/BaseUIWidget/Panel';
import {Post,URL} from '../../system/Post';
import Panels from '../../components/BaseUIWidget/Panels';

const columns = [
  {
    title: "姓名",
    dataIndex: 'name',
    key: 'name',
    width: '15%',
  }, {
    title: "手机号",
    dataIndex: 'telephone',
    key: 'telephone',
    width: '17%',
  }, {
    title: "是否有PDA",
    dataIndex: 'haspda',
    key: 'haspda',
    width: '17%',
    render: haspda => {
      return haspda==="1"?"有":"没有";
    }
  },{
    title: "是否在职",
    dataIndex: 'deltag',
    key: 'deltag',
    width: '17%',
    render: deltag => {
      return deltag==="1"?"离职":"在职";
    }
  },{
    title: "所属单位",
    dataIndex: 'station',
    key: 'station',
    width: '17%',
  },{
    title: "取派标准",
    dataIndex: 'standard',
    key: 'standard',
    width: '17%',
  }
];

class Staff extends React.Component{
  constructor(props){
    super(props);


    this.openModel = this.openModel.bind(this);
    this.closeModel = this.closeModel.bind(this);
    this.getList = this.getList.bind(this);
    this.addStaff = this.addStaff.bind(this);
    this.state={
      dataSource:null,
      isModal:false,
      addStaff:{
        deltag: "0", //添加时候 默认在职
        haspda: "1" //添加时候 默认有
      },
    }
  }
  componentWillMount(){
    this.getList();
  }

  getList(){
    Post(URL.StaffList).then(
      data=>{
        this.setState({
          dataSource:data
        })
      }
    )
  }

  openModel(){
    this.setState({
      isModal:true,
    });
  }

  closeModel(){
    this.setState({
      isModal:false,
    });
  }

  onChange(key,e){
    console.log(typeof e ==="string");
    let {addStaff} = this.state;
    if(typeof e ==="string"){
      addStaff[key] = e;
    }else{
      let value = e.target.value;
      addStaff[key] = value;

    }
    this.setState({
      addStaff
    })
  }

  addStaff(){
    let {addStaff} = this.state;
    console.log(addStaff);
    Post(URL.AddStaff,addStaff).then(
      data=>{
        console.log(data);
        this.getList();
        this.closeModel();
      }
    )
  }

  render(){
    let dataSource = [
      {
        title:"姓名",
        entryProps:{
          stype:"Input",
          value:this.state.addStaff.name,
          onChange:this.onChange.bind(this,'name'),
        }
      }, {
        title:"手机",
        entryProps:{
          stype:"Input",
          value:this.state.addStaff.telephone,
          onChange:this.onChange.bind(this,'telephone'),
        }
      }, {
        title:"是否有PDA",
        entryProps:{
          stype:"Select",
          value:this.state.addStaff.haspda,
          onChange:this.onChange.bind(this,'haspda'),
          options:[
            {
              title:"有",
              value:'1'
            },{
              title:"没",
              value:'0'
            },
          ],
        }
      }, {
        title:"所属单位",
        entryProps:{
          stype:"Input",
          value:this.state.addStaff.station,
          onChange:this.onChange.bind(this,'station'),
        }
      }, {
        title:"取派标准",
        entryProps:{
          stype:"Input",
          value:this.state.addStaff.standard,
          onChange:this.onChange.bind(this,'standard'),
        }
      }
    ];
    return(
      <div>
        <Panel
          title={'取派员设置'}
          foot={
            <Row type="flex" justify="end" style={{marginTop: 2}}>
              <Button type="primary"  style={{marginRight:8}} onClick={this.openModel}>添加</Button>
              <Button type="primary"  >删除</Button>
            </Row>
          }
        >
          <Table
            columns = {columns}
            dataSource = {this.state.dataSource}
            size="small"
            bordered
            pagination={false}
          />
        </Panel>
        <Modal
          width='400px'
          title='添加取派员'
          visible={this.state.isModal}
          onCancel={this.closeModel}
          footer={
          <Row type="flex" justify="end" style={{marginTop: 2}}>
              <Button type="primary"  style={{marginRight:8}} onClick={this.addStaff}>确定</Button>
              <Button type="primary"  >删除</Button>
           </Row>}
        >
          <Panels
            dataSource={dataSource}
          />
        </Modal>
      </div>

    )
  }
}

export default connect(({ example }) => ({
  example,
}))(Staff);
