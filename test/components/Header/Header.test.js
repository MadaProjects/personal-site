import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from '../../../src/components/Header/Header';

describe('Header', () => {
  it('render a component', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('display menu button', () => {
    render(<Header />);
    expect(screen.getByRole('button').textContent).toEqual(
      'Open sidebar menu'
    );
  });
});
