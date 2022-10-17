import { render, screen } from '@testing-library/react';
import React from 'react';
import { App } from './App';

jest.mock('antd', () => ({
  PageHeader: () => <div data-testid="header">header</div>,
  Layout: () => <div data-testid="layout">layout</div>,
  Footer: () => <div data-testid="footer">footer</div>,
}))

describe('main page', () => {
  it('should render the main component', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
})

