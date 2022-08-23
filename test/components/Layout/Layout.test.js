import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../../__mocks__/matchMedia';
import { Layout } from '../../../src/components/Layout/Layout';

describe('Layout', () => {
  it('render component', () => {
    render(<Layout />);
    expect(screen.getByTestId('layoutWrapper')).toBeInTheDocument();
  });

  it('has skip to main content button', () => {
    render(<Layout />);
    expect(screen.getByText('Skip to Main Content')).toBeInTheDocument();
  });
});
