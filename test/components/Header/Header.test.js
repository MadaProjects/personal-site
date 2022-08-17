import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '../../../src/components/Header/Header';

describe('Header', () => {
  it('render a component', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('display menu button', () => {
    render(<Header />);

    expect(
      screen.getByRole('button', { name: 'Open sidebar menu' })
    ).toBeInTheDocument();
  });
});
