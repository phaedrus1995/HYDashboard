import { Button } from 'antd';
import React from 'react';
import './View.css'

export const SiderContent = () => {
    return (
        <div className='selectable-area'>
            <Button type='primary' size='large' className='deadline-reminder'>deadline reminder</Button>
            <Button type='primary'size='large' className='customer-details'>customer details</Button>
        </div>
    )
}