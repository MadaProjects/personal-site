import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NotFoundPage from '../../src/pages/404';

describe('404', () => {
  it('render a page', () => {
    render(<NotFoundPage />);
    expect(screen.getByTestId('pageNotFound')).toBeInTheDocument();
  });
});
