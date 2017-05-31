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
              <Menu.Item key="51"><a href="/#/Extend/ClassSchedule">我的课表</a></Menu.Item>
              {/*<Menu.Item key="52">待阅文件</Menu.Item>*/}
            </SubMenu>
            <SubMenu key="sub52" title={<span>视频通讯</span>}>
              <Menu.Item key="55"><a href="/#/Extend/AddressList">通讯录</a></Menu.Item>
              {/*<Menu.Item key="56">我创建的文件</Menu.Item>*/}
              {/*<Menu.Item key="57">我已办的文件</Menu.Item>*/}
              {/*<Menu.Item key="58">我已阅的文件</Menu.Item>*/}
            </SubMenu>
            <SubMenu key="sub53" title={<span>会议记录</span>}>
              <Menu.Item key="56"><a href="/#/Extend/Minutes">会议记录表</a></Menu.Item>
            </SubMenu>
            <SubMenu key="sub54" title={<span>系统设置</span>}>
              <Menu.Item key="57" ><a href="/#/Extend/StyleEdit">样式和语言设置</a></Menu.Item>
            </SubMenu>
            {/*<SubMenu key="sub53" title={<span>会议记录</span>}>*/}
              {/*<Menu.Item key="56"><a href="/#/Extend/Minutes">会议记录表</a></Menu.Item>*/}
            {/*</SubMenu>*/}
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
export default connect(({ example }) => ({
  example,
}))(Extend);
