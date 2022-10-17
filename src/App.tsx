import React from 'react';
import './App.css';
import { Divider, Layout, PageHeader } from 'antd';
import { HeaderContent } from './Header';
import { SiderContent } from './Sider/View';
import { Deadline } from './DeadlineReminder/View';
import { Content, Footer } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';

export const mockDeadline: Deadline[] = [
    {
        customerId: '0001',
        customerName: 'Thoughtworks',
        deadline: '1663352154000'
    },
    {
        customerId: '0002',
        customerName: 'Volkswagen',
        deadline: '1665944154000'
    },
    {
        customerId: '0003',
        customerName: 'logitech',
        deadline: '1668622554000'
    },
]

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
