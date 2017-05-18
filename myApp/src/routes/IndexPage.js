import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { connect } from 'dva';
import styles from './IndexPage.less';

function IndexPage(props) {

  return (
    <Layout>
      <Header className="header">
        <div className={styles.logo} >
          <p className={styles.name}>李芊，您好!</p>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><a href="/#/PersonalWorkbench">个人工作台</a></Menu.Item>
          <Menu.Item key="2"><a href="/#/FileMangement">公文管理</a></Menu.Item>
          <Menu.Item key="3"><a href="/#/BussinessOffice">业务办公</a></Menu.Item>
          <Menu.Item key="4">公共信息</Menu.Item>
        </Menu>
      </Header>
      {props.children}
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
