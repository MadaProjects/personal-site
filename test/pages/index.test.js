import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import IndexPage from '../../src/pages';

describe('IndexPage', () => {
  it('render a page', () => {
    render(<IndexPage />);
    expect(screen.getByTestId('indexPage')).toBeInTheDocument();
  });

  it('render name', () => {
    render(<IndexPage />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toEqual(
      'Peter Mada'
    );
  });
});
