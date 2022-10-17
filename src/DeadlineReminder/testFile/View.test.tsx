import { render, screen } from '@testing-library/react';
import { DeadlineReminder } from '../View';
import { mockDeadline } from '../../App';
import React from 'react';
import '@testing-library/jest-dom'


describe('deadline reminder', () => {
    it('should show the over-due customer', () => {
        render(<DeadlineReminder deadline={mockDeadline} />)
        expect(screen.getByText('Thoughtworks')).toBeInTheDocument();
        expect(screen.getByText('Volkswagen')).toBeInTheDocument();
        expect(screen.getByText('logitech')).toBeInTheDocument();
    })
})