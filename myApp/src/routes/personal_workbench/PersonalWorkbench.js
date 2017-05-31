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
            theme={this.props.example.styleChange}
          >
            <SubMenu key="sub11" title={<span>{this.props.example.language["BacklogWork"]}</span>}>
              <Menu.Item key="11">{this.props.example.language["BacklogWork"]}</Menu.Item>
              <Menu.Item key="12">{this.props.example.language["ToBeRead"]}</Menu.Item>
            </SubMenu>
            <SubMenu key="sub12" title={<span>{this.props.example.language["FinishWork"]}</span>}>
              <Menu.Item key="15">{this.props.example.language["AttentionFile"]}</Menu.Item>
              <Menu.Item key="16">{this.props.example.language["FoundFile"]}</Menu.Item>
              <Menu.Item key="17">{this.props.example.language["FinishFile"]}</Menu.Item>
              <Menu.Item key="18">{this.props.example.language["ReadFile"]}</Menu.Item>
            </SubMenu>
            <SubMenu key="sub13" title={<span>{this.props.example.language["DraftFile"]}</span>}>
              <Menu.Item key="19"><a href="/#/PersonalWorkbench/InstitutePost">{this.props.example.language["InstitutePost"]}</a></Menu.Item>
            </SubMenu>
            <SubMenu key="sub14" title={<span>{this.props.example.language["WorkSettings"]}</span>}>
              <Menu.Item key="110">{this.props.example.language["PersonalityConfiguration"]}</Menu.Item>
              <Menu.Item key="111">{this.props.example.language["ChangePassword"]}</Menu.Item>
              <Menu.Item key="112">{this.props.example.language["SetOut"]}</Menu.Item>
              <Menu.Item key="113">{this.props.example.language["CommonOpinions"]}</Menu.Item>
              <Menu.Item key="114">{this.props.example.language["CommonActions"]}</Menu.Item>
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
}))(PersonalWorkbench);
