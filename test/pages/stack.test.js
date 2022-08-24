import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '../../__mocks__/matchMedia';
import StackPage from '../../src/pages/stack';
import { stack } from '../../src/data/stack';

describe('Stack', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  it('render a page', () => {
    render(<StackPage />);
    expect(screen.getByTestId('stackPage')).toBeInTheDocument();
  });

  it('has main tag', () => {
    render(<StackPage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('has main heading', () => {
    render(<StackPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      'My favorite stack'
    );
  });

  it('render right number of images', () => {
    render(<StackPage />);
    expect(screen.getAllByRole('img').length).toEqual(stack.length);
  });
});
