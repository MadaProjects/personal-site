import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../__mocks__/matchMedia';
import NotFoundPage from '../../src/pages/404';

describe('404', () => {
  it('render a page', () => {
    render(<NotFoundPage />);
    expect(screen.getByTestId('pageNotFound')).toBeInTheDocument();
  });

  it('render 404 text', () => {
    render(<NotFoundPage />);
    expect(screen.getByTestId('pageNotFound')).toHaveTextContent('404');
  });

  it('render page not found text', () => {
    render(<NotFoundPage />);
    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });

  it('has main tag', () => {
    render(<NotFoundPage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
