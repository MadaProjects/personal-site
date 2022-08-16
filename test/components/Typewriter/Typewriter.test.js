import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Typewriter } from '../../../src/components/Typewriter/Typewriter';

describe('Typewriter', () => {
  it('render a componenent', () => {
    render(<Typewriter />);
    expect(screen.getByTestId('typewriter')).toBeInTheDocument();
  });
});
