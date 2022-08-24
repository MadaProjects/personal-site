import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../__mocks__/matchMedia';
import IndexPage from '../../src/pages';

describe('IndexPage', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

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

  it('has main tag', () => {
    render(<IndexPage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('has main heading', () => {
    render(<IndexPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
