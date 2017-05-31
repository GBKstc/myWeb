import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'dva/router';
import { connect } from 'dva';
import styles from './IndexPage.less';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class IndexPage extends React.Component{
  constructor(props){
    super(props);
  }



  render(){

    return (
      <Layout>
        <Header className="header">
          <div className={styles.logo} >
            <p className={styles.name}>{this.props.example.language["name"]}</p>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link href="/#/PersonalWorkbench">{this.props.example.language["PersonalWorkbench"]}</Link></Menu.Item>
            <Menu.Item key="2"><Link href="/#/FileMangement">{this.props.example.language["FileMangement"]}</Link></Menu.Item>
            <Menu.Item key="3"><Link href="/#/BussinessOffice">{this.props.example.language["BussinessOffice"]}</Link></Menu.Item>
            <Menu.Item key="4"><Link href="/#/NoticeInfo">{this.props.example.language["NoticeInfo"]}</Link></Menu.Item>
            <Menu.Item key="5"><Link href="/#/Extend">{this.props.example.language["Extend"]}</Link></Menu.Item>
          </Menu>
        </Header>
        {this.props.children}
      </Layout>
    )
  }
}


export default connect(({ example }) => ({
  example,
}))(IndexPage);
