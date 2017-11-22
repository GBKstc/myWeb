
import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class BaseFeature extends React.Component{
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
            <SubMenu key="sub31" title={<span>基础数据</span>}>
              <Menu.Item key="1"><a href="/#/BaseFeature/Staff">取派员设置</a>取派员设置</Menu.Item>
              <Menu.Item key="2">区域设置</Menu.Item>
              <Menu.Item key="3">管理分区</Menu.Item>
              <Menu.Item key="4">管理定区/调度排班</Menu.Item>
            </SubMenu>
            <SubMenu key="sub32" title={<span>受理</span>}>

            </SubMenu>
            <SubMenu key="sub33" title={<span>调度</span>}>

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
}))(BaseFeature);
