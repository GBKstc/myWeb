/**
 * Created by Administrator on 2017/5/18.
 */
import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class FileMangement extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            //defaultSelectedKeys={['1']}
            //defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            theme={this.props.example.styleChange}
          >
            <SubMenu key="sub21" title={<span>{this.props.example.language["PostManagement"]}</span>}>
              <Menu.Item key="21">{this.props.example.language["WorkingPost"]}</Menu.Item>
              <Menu.Item key="22">{this.props.example.language["HavePost"]}</Menu.Item>
            </SubMenu>
            <SubMenu key="sub22" title={<span>{this.props.example.language["RecordManagement"]}</span>}>
              <Menu.Item key="23">{this.props.example.language["WorkingAddressee"]}</Menu.Item>
              <Menu.Item key="24">{this.props.example.language["HaveAddressee"]}</Menu.Item>
            </SubMenu>
            <SubMenu key="sub23" title={<span>{this.props.example.language["RequestForInstruction"]}</span>}>
              <Menu.Item key="25"><a href="">{this.props.example.language["ReportInTheOffice"]}</a></Menu.Item>
              <Menu.Item key="26"><a href="">{this.props.example.language["AdvisoryReportMade"]}</a></Menu.Item>
            </SubMenu>
            <SubMenu key="sub24" title={<span>{this.props.example.language["DepartmentOfPost"]}</span>}>
              <Menu.Item key="27">{this.props.example.language["OfficeOfOffice"]}</Menu.Item>
              <Menu.Item key="28">{this.props.example.language["DepartmentHasIssuedPost"]}</Menu.Item>
            </SubMenu>
            <SubMenu key="sub25" title={<span>{this.props.example.language["OfficialDocumentForm"]}</span>}>
              <Menu.Item key="210">{this.props.example.language["SchoolReadingList"]}</Menu.Item>
              <Menu.Item key="211">{this.props.example.language["HospitalReadingList"]}</Menu.Item>
              <Menu.Item key="212">{this.props.example.language["DepartmentReadingList"]}</Menu.Item>
            </SubMenu>
            <SubMenu key="sub26" title={<span>{this.props.example.language["ArchivedFile"]}</span>}>
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

// export default FileMangement;
export default connect(({ example }) => ({
  example,
}))(FileMangement);
