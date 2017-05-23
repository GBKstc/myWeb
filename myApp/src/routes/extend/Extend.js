/**
 * Created by Administrator on 2017/5/23.
 */
import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Extend extends React.Component{
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
            <SubMenu key="sub51" title={<span>我的课表</span>}>
              <Menu.Item key="51">我的课表</Menu.Item>
              {/*<Menu.Item key="52">待阅文件</Menu.Item>*/}
            </SubMenu>
            <SubMenu key="sub52" title={<span>会议视频</span>}>
              <Menu.Item key="55">通讯录</Menu.Item>
              {/*<Menu.Item key="56">我创建的文件</Menu.Item>*/}
              {/*<Menu.Item key="57">我已办的文件</Menu.Item>*/}
              {/*<Menu.Item key="58">我已阅的文件</Menu.Item>*/}
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
export default connect(({ extend }) => ({
  extend,
}))(Extend);
