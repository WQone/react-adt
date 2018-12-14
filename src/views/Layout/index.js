import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import './index.scss';
import { Layout, Menu, Icon } from 'antd';
import menuList from '../../router';

export default class BasicLayout extends Component {
  state = {
    collapsed: false,
    routeName: '',
  };
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  componentWillMount() {
    console.log(this, 'test');
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  goPath = (path) => {
    console.log(this);
  };

  render() {
    const { Header, Content, Sider, Footer } = Layout;

    return (
      <HashRouter>
        <Layout style={{ height: '100vh' }}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
              {menuList.map((item, index) => {
                return (
                  <Menu.Item key={index} onClick={() => this.goPath(item.path)}>
                    <Link to={item.path}>
                      <Icon type={item.icon} />
                      <span>{item.name}</span>
                    </Link>
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}
            >
              {menuList.map((route, index) => (
                <Route exact key={index} path={route.path} component={route.component} />
              ))}
              {/* {this.props.children} */}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </HashRouter>
    );
  }
}
