import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Dots } from '../../../src/components/Dots/Dots';

describe('Dots', () => {
  it('render a component', () => {
    render(<Dots />);
    expect(screen.getByTestId('svgDots')).toBeInTheDocument();
  });

  /*
  it('render a svg', () => {
    render(<Dots />);
    expect();
  });
  */
});
