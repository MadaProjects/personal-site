import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import StackPage from '../../src/pages/stack';

describe('Stack', () => {
  it('render a page', () => {
    render(<StackPage />);
    expect(screen.getByTestId('stackPage')).toBeInTheDocument();
  });
});
