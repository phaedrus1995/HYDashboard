import React from 'react';
import './App.css';
import { Divider, Layout, PageHeader } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { HeaderContent } from './Header';
import { SiderContent } from './Sider/View';

export function App() {
  return (
    <div className="App">
        <Layout className="Page">
            <PageHeader title='Customer Management System' className='header'>
                <HeaderContent/>
            </PageHeader>
            <Divider className='divider'/>
            <Layout className='content'>
                <Sider className='side-bar'>
                    <SiderContent />
                </Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    </div>
  );
}
