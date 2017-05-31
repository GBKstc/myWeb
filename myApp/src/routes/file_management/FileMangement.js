/**
 * Created by Administrator on 2017/5/18.
 */
import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class FileMangement extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            //defaultSelectedKeys={['1']}
            //defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub21" title={<span>发文管理</span>}>
              <Menu.Item key="21">在办发文</Menu.Item>
              <Menu.Item key="22">已办发文</Menu.Item>
            </SubMenu>
            <SubMenu key="sub22" title={<span>收文管理</span>}>
              <Menu.Item key="23">在办收文</Menu.Item>
              <Menu.Item key="24">已办收文</Menu.Item>
            </SubMenu>
            <SubMenu key="sub23" title={<span>请示报告</span>}>
              <Menu.Item key="25"><a href="">在办请示报告</a></Menu.Item>
              <Menu.Item key="26"><a href="">已办请示报告</a></Menu.Item>
            </SubMenu>
            <SubMenu key="sub24" title={<span>部门发文</span>}>
              <Menu.Item key="27">在办部门发文</Menu.Item>
              <Menu.Item key="28">已办部门发文</Menu.Item>
            </SubMenu>
            <SubMenu key="sub25" title={<span>公文登记表</span>}>
              <Menu.Item key="29">学院发文一览表</Menu.Item>
              <Menu.Item key="210">学院收文一览表</Menu.Item>
              <Menu.Item key="211">院内请示报告一览表</Menu.Item>
              <Menu.Item key="212">部门发文一览表</Menu.Item>
            </SubMenu>
            <SubMenu key="sub26" title={<span>归档文件</span>}>
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

// export default FileMangement;
export default connect(({ example }) => ({
  example,
}))(FileMangement);
