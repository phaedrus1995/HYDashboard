import { render, screen } from '@testing-library/react';
import { HeaderContent } from '../View';
import React from 'react';

describe('Header Content', () => {
    it('should render the title of the page', () => {
        render(<HeaderContent/>);
        expect(screen.getByText('Help'))
    })
})