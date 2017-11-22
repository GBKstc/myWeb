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
            //defaultSelectedKeys={['51']}
            style={{ height: '100%' }}
            theme={this.props.example.styleChange}
          >
            <SubMenu key="sub51" title={<span>{this.props.example.language["MySchedule"]}</span>}>
              <Menu.Item key="51"><a href="/#/Extend/ClassSchedule">{this.props.example.language["MySchedule"]}</a></Menu.Item>
            </SubMenu>
            <SubMenu key="sub52" title={<span>{this.props.example.language["VideoCommunication"]}</span>}>
              <Menu.Item key="55"><a href="/#/Extend/AddressList">{this.props.example.language["AddressList"]}</a></Menu.Item>
            </SubMenu>
            <SubMenu key="sub53" title={<span>{this.props.example.language["Minutes"]}</span>}>
              <Menu.Item key="56"><a href="/#/Extend/Minutes">{this.props.example.language["MinutesForm"]}</a></Menu.Item>
            </SubMenu>
            <SubMenu key="sub54" title={<span>{this.props.example.language["SystemSettings"]}</span>}>
              <Menu.Item key="57" ><a href="/#/Extend/StyleEdit">{this.props.example.language["StyleAndLanguageSettings"]}</a></Menu.Item>
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
export default connect(({ example }) => ({
  example,
}))(Extend);
