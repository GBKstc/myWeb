/**
 * Created by Administrator on 2017/5/18.
 */
import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class BussinessOffice extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            theme={this.props.example.styleChange}
            //defaultSelectedKeys={['1']}
            //defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub31" title={<span>{this.props.example.language["MeetingRoomManagement"]}</span>}>
            </SubMenu>
            <SubMenu key="sub32" title={<span>{this.props.example.language["DepartmentalNotice"]}</span>}>
              {/*<Menu.Item key="3">在办收文</Menu.Item>*/}
              {/*<Menu.Item key="4">已办收文</Menu.Item>*/}
            </SubMenu>
            <SubMenu key="sub33" title={<span>{this.props.example.language["DepartmentalInstructions"]}</span>}>
              {/*<Menu.Item key="5"><a href="">在办请示报告</a></Menu.Item>*/}
              {/*<Menu.Item key="6"><a href="">已办请示报告</a></Menu.Item>*/}
            </SubMenu>
            <SubMenu key="sub34" title={<span>{this.props.example.language["UnionPost"]}</span>}>
              {/*<Menu.Item key="7">在办部门发文</Menu.Item>*/}
              {/*<Menu.Item key="8">已办部门发文</Menu.Item>*/}
            </SubMenu>
            <SubMenu key="sub35" title={<span>{this.props.example.language["UnionInstructions"]}</span>}>
              {/*<Menu.Item key="9">学院发文一览表</Menu.Item>*/}
              {/*<Menu.Item key="10">学院收文一览表</Menu.Item>*/}
              {/*<Menu.Item key="11">院内请示报告一览表</Menu.Item>*/}
              {/*<Menu.Item key="12">部门发文一览表</Menu.Item>*/}
            </SubMenu>
            <SubMenu key="sub6" title={<span>{this.props.example.language["ArchivedFile"]}</span>}>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
          </Breadcrumb>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// export default BussinessOffice;
export default connect(({ example }) => ({
  example,
}))(BussinessOffice);
