import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from "react-router-dom"
import * as actions from "../store/actions/auth"
import { connect } from "react-redux"


const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">
                            <Link
                                to="/"
                            >Posts</Link>
                        </Menu.Item>
                        {
                            this.props.isAuthenticated
                                ?
                                <Menu.Item key="2" onClick={this.props.logout()}>
                                    Logout
                                </Menu.Item>
                                :
                                <Menu.Item key="3">
                                    <Link
                                        to="/login"
                                    >Login</Link>
                                </Menu.Item>
                        }
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
        </Footer>
            </Layout>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}
export default connect(null, mapDispatchToProps)(CustomLayout);