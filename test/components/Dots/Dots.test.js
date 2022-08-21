import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Dots } from '../../../src/components/Dots/Dots';

describe('Dots', () => {
  it('render a component', () => {
    render(<Dots />);
    expect(screen.getByTestId('svgDots')).toBeInTheDocument();
  });

  it('render a svg', () => {
    render(<Dots />);
    expect(screen.getByTestId('svgDots').tagName).toEqual('svg');
  });

  // TODO snapshot test does not work becouse of randomnes in svg
  it.skip('render svg correctly', () => {
    const tree = TestRenderer.create(<Dots />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has right number of paths in svg', () => {
    const { container } = render(<Dots />);
    expect(container.querySelectorAll('path').length).toBe(1562);
  });
});
