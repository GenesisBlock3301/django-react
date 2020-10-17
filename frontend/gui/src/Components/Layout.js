import React from 'react'
// import {Link} from 'react-router-dom'
import {Layout, Menu, Breadcrumb} from 'antd';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const {Header, Content, Footer} = Layout;

const CustomLayout = (props) => {
    return (
        <BrowserRouter>
            <Layout className="layout">
                <Header>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        {
                            props.isAuthenticated ?
                                <Menu.Item key="2"><Link to='/login'/>Logout</Menu.Item>
                                :
                                <Menu.Item key="2"><Link to='/login'/>Login</Menu.Item>
                        }

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
        </BrowserRouter>
    )
};
export default CustomLayout