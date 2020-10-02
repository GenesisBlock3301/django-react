import React from 'react'
// import {Link} from 'react-router-dom'
import {Layout, Menu, Breadcrumb} from 'antd';
import {Link} from 'react-router-dom'


const {Header, Content, Footer} = Layout;

const CustomLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><Link to='/'/>Posts</Menu.Item>
                    <Menu.Item key="1"><Link to='/login'/>Login</Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to='/'>List</Link></Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2020 Created by Ant UED</Footer>
        </Layout>
    )
};
export default CustomLayout