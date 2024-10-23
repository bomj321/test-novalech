import React from 'react';
import { Layout, Menu } from 'antd';
import { useAuth } from '../AuthContext';
import { useHistory } from 'react-router-dom';

import {
  FundProjectionScreenOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

import '../styles/components/Template.css';

const { Header, Footer, Content } = Layout;

const Template = ({ children }) => {
  const location = useLocation();
  const history = useHistory();
  const { user, logout } = useAuth();

  const logOut = () => {
    logout();
    history.push('/');
  };

  const MenuItem = ({ role }) => {
    console.log('role', role);
    if (role === 'ADMIN') {
      return (
        <Menu.Item
          key="1"
          icon={<FundProjectionScreenOutlined />}
          className={
            location.pathname === '/employees' ? 'ant-menu-item-selected' : ''
          }
        >
          <Link to="/employees">Empleados</Link>
        </Menu.Item>
      );
    } else {
      return (
        <Menu.Item
          key="1"
          icon={<FundProjectionScreenOutlined />}
          className={
            location.pathname === '/evaluations' ? 'ant-menu-item-selected' : ''
          }
        >
          <Link to="/evaluations">Evaluaciones</Link>
        </Menu.Item>
      );
    }
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" className="header-menu-template">
          <MenuItem role={user?.role} />

          <Menu.Item key="3" icon={<LogoutOutlined />} onClick={() => logOut()}>
            Salir
          </Menu.Item>
        </Menu>
      </Header>

      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Test Novalech @2024 Created by José ortega
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Template;
