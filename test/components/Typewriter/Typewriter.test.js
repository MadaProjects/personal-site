import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Typewriter } from '../../../src/components/Typewriter/Typewriter';

describe('Typewriter', () => {
  it('render a componenent', () => {
    render(<Typewriter />);
    expect(screen.getByTestId('typewriter')).toBeInTheDocument();
  });

  it('render static text from props', () => {
    const text = 'Lorem ipsum';
    render(<Typewriter staticText={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('render diferent static text from props', () => {
    const text = 'Lorem second ipsum';
    render(<Typewriter staticText={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('render empty component on missing props', () => {
    render(<Typewriter />);
    expect(screen.getByTestId('typewriter').textContent).toEqual('');
  });

  it('render dynamic text', () => {
    const text = 'Text';
    render(<Typewriter dynamicText={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
