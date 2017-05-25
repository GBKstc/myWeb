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
          >
            <SubMenu key="sub41" title={<span>公共信息</span>}>
              <Menu.Item key="41"><a href="/#/NoticeInfo/OutRecord">人员外出</a></Menu.Item>
              <Menu.Item key="42">内部论坛</Menu.Item>
              {/*<Menu.Item key="43">通讯录</Menu.Item>*/}
              <Menu.Item key="44">组织结构</Menu.Item>
              <Menu.Item key="45">IE浏览器设置</Menu.Item>
              <Menu.Item key="46">OA系统操作手册</Menu.Item>
              <Menu.Item key="47">OA测试服务器使用说明</Menu.Item>
              <Menu.Item key="48">工会会员登记表下载</Menu.Item>
            </SubMenu>
            <SubMenu key="sub42" title={<span>短信平台</span>}>
              <Menu.Item key="45">发送短信</Menu.Item>
              <Menu.Item key="46">发件箱</Menu.Item>
              {/*<Menu.Item key="47">我已办的文件</Menu.Item>*/}
              {/*<Menu.Item key="48">我已阅的文件</Menu.Item>*/}
            </SubMenu>
            <SubMenu key="sub43" title={<span>邮箱</span>}>
              <Menu.Item key="48">发送邮件</Menu.Item>
              <Menu.Item key="49">已发邮件</Menu.Item>
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
export default connect(({ noticeInfo }) => ({
  noticeInfo,
}))(NoticeInfo);
