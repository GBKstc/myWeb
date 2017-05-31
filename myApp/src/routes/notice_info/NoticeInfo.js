/**
 * Created by Administrator on 2017/5/23.
 */
import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class NoticeInfo extends React.Component{
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
            <SubMenu key="sub41" title={<span>{this.props.example.language["PublicInformation"]}</span>}>
              <Menu.Item key="41"><a href="/#/NoticeInfo/OutRecord">{this.props.example.language["PeopleOut"]}</a></Menu.Item>
              <Menu.Item key="42">{this.props.example.language["InternalBBS"]}</Menu.Item>
              {/*<Menu.Item key="43">通讯录</Menu.Item>*/}
              <Menu.Item key="44">{this.props.example.language["OrganizationStructure"]}</Menu.Item>
              <Menu.Item key="45">{this.props.example.language["IESetting"]}</Menu.Item>
              <Menu.Item key="46">{this.props.example.language["OAOperationManual"]}</Menu.Item>
              <Menu.Item key="47">{this.props.example.language["OAServerUsageInstructions"]}</Menu.Item>
              <Menu.Item key="48">{this.props.example.language["MembershipRegistrationDown"]}</Menu.Item>
            </SubMenu>
            <SubMenu key="sub42" title={<span>{this.props.example.language["MessagePlatform"]}</span>}>
              <Menu.Item key="45">{this.props.example.language["SendMessage"]}</Menu.Item>
              <Menu.Item key="46">{this.props.example.language["Outbox"]}</Menu.Item>
              {/*<Menu.Item key="47">我已办的文件</Menu.Item>*/}
              {/*<Menu.Item key="48">我已阅的文件</Menu.Item>*/}
            </SubMenu>
            <SubMenu key="sub43" title={<span>{this.props.example.language["Mailbox"]}</span>}>
              <Menu.Item key="48"><a href="/#/NoticeInfo/SendMail">{this.props.example.language["Sendmail"]}</a></Menu.Item>
              <Menu.Item key="49"><a href="/#/NoticeInfo/HaveSentMail">{this.props.example.language["HaveSendmail"]}</a></Menu.Item>
            </SubMenu>
            {/*<SubMenu key="sub44" title={<span>工作设置</span>}>*/}
              {/*<Menu.Item key="410">个性配置</Menu.Item>*/}
              {/*<Menu.Item key="411">修改密码</Menu.Item>*/}
              {/*<Menu.Item key="412">外出设置</Menu.Item>*/}
              {/*<Menu.Item key="413">常用意见</Menu.Item>*/}
              {/*<Menu.Item key="414">常用动作</Menu.Item>*/}
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
}))(NoticeInfo);
