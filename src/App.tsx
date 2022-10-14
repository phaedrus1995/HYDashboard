import React from 'react';
import './App.css';
import { Divider, Layout, PageHeader } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { HeaderContent } from './Header';

export function App() {
  return (
    <div className="App">
        <Layout className="Page">
            <PageHeader title='Customer Management System' className='header'>
                <HeaderContent/>
            </PageHeader>
            <Divider className='divider'/>
            <Layout>
                <Sider>Sider</Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    </div>
  );
}
