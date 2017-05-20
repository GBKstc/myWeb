/**
 * Created by Administrator on 2017/5/18.
 */
import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class PersonalWorkbench extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            //defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub11" title={<span>待办工作</span>}>
              <Menu.Item key="11">待办工作</Menu.Item>
              <Menu.Item key="12">待阅文件</Menu.Item>
            </SubMenu>
            <SubMenu key="sub12" title={<span>以办工作</span>}>
              <Menu.Item key="15">我关注的文件</Menu.Item>
              <Menu.Item key="16">我创建的文件</Menu.Item>
              <Menu.Item key="17">我已办的文件</Menu.Item>
              <Menu.Item key="18">我已阅的文件</Menu.Item>
            </SubMenu>
            <SubMenu key="sub13" title={<span>草拟文件</span>}>
              <Menu.Item key="19"><a href="/#/PersonalWorkbench/InstitutePost">学院发文</a></Menu.Item>
            </SubMenu>
            <SubMenu key="sub14" title={<span>工作设置</span>}>
              <Menu.Item key="110">个性配置</Menu.Item>
              <Menu.Item key="111">修改密码</Menu.Item>
              <Menu.Item key="112">外出设置</Menu.Item>
              <Menu.Item key="113">常用意见</Menu.Item>
              <Menu.Item key="114">常用动作</Menu.Item>
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

// export default Products;
export default connect(({ personalWorkbench }) => ({
  personalWorkbench,
}))(PersonalWorkbench);
