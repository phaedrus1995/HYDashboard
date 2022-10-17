import { render, screen } from '@testing-library/react';
import { SiderContent } from '../View';
import React from 'react';
import '@testing-library/jest-dom'


describe('Sider', () => {
    it('should render buttons', () => {
        render(<SiderContent/>)
        expect(screen.getByText('deadline reminder')).toBeInTheDocument();
        expect(screen.getByText('customer details')).toBeInTheDocument();
    })
})