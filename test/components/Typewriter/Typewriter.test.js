import '@testing-library/jest-dom';
import { render, screen, act, waitFor } from '@testing-library/react';
import { Typewriter } from '../../../src/components/Typewriter/Typewriter';
import React from 'react';

describe('Typewriter', () => {
  const mockedText = [
    'Lorem ipsum',
    'Et donor',
    'Etiam bibendum',
    'Aliquam erat',
  ];

  const timeForOneChar = 75;
  const pauseBetweenWords = timeForOneChar * 50;

  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });

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

  it('render dynamic text ', async () => {
    render(<Typewriter dynamicText={mockedText} />);

    act(() => {
      jest.advanceTimersByTime(
        timeForOneChar * mockedText[1].length + timeForOneChar
      );
    });

    expect(await screen.findByText(mockedText[0])).toBeInTheDocument();
  });

  it('render second dynamic text after x seconds', async () => {
    const dynam = ['Lorem ipsum', 'Ipsum et donor'];
    render(<Typewriter dynamicText={dynam} />);

    act(() => {
      jest.advanceTimersByTime(
        timeForOneChar * dynam[0].length +
          timeForOneChar +
          pauseBetweenWords * timeForOneChar +
          timeForOneChar * dynam[1].length
      );
    });

    expect(await screen.findByText(dynam[1])).toBeInTheDocument();
  });

  it('render fourth dynamic text after x seconds', async () => {
    render(<Typewriter dynamicText={mockedText} />);

    const lengthOfPreviousWords =
      mockedText[0].length +
      mockedText[1].length +
      mockedText[2].length +
      mockedText[3].length;

    act(() => {
      jest.advanceTimersByTime(
        lengthOfPreviousWords * timeForOneChar +
          3 * pauseBetweenWords * timeForOneChar
      );
    });

    expect(await screen.findByText(mockedText[3])).toBeInTheDocument();
  });

  it('render first sentence after shows all sentences from array', async () => {
    render(<Typewriter dynamicText={mockedText} />);
    act(() => {
      jest.advanceTimersByTime(4000);
    });

    expect(await screen.findByText(mockedText[0])).toBeInTheDocument();
  });

  describe('chars', () => {
    it('renders nothing on load', () => {
      const component = render(<Typewriter dynamicText={mockedText} />);

      expect(screen.getByTestId('dynamicText').textContent).toEqual('');
    });

    it('render first char of first word after x seconds', async () => {
      const component = render(<Typewriter dynamicText={mockedText} />);
      act(() => {
        jest.advanceTimersByTime(timeForOneChar * 2);
      });

      expect(screen.getByTestId('dynamicText').textContent).toEqual('L');
    });

    it('render first 4 chars of first word after x seconds', async () => {
      const component = render(<Typewriter dynamicText={mockedText} />);
      act(() => {
        jest.advanceTimersByTime(timeForOneChar * 4 + timeForOneChar);
      });

      expect(screen.getByTestId('dynamicText').textContent).toEqual(
        'Lore'
      );
    });

    it('render first 6 chars of third word after x seconds', async () => {
      const component = render(<Typewriter dynamicText={mockedText} />);

      const lengthOfPreviousWords =
        mockedText[0].length + mockedText[1].length;

      act(() => {
        jest.advanceTimersByTime(
          1 * (lengthOfPreviousWords * timeForOneChar) +
            1 * pauseBetweenWords * timeForOneChar +
            mockedText[2].length * timeForOneChar +
            (mockedText[2].length - 6) * timeForOneChar
        );
      });

      expect(screen.getByTestId('dynamicText').textContent).toEqual(
        mockedText[2].slice(0, 6)
      );
    });

    it('has pause after word is typed', () => {
      const component = render(<Typewriter dynamicText={mockedText} />);

      act(() => {
        jest.advanceTimersByTime(
          mockedText[0].length * timeForOneChar + timeForOneChar
        );
      });

      expect(screen.getByTestId('dynamicText').textContent).toEqual(
        mockedText[0]
      );

      act(() => {
        jest.advanceTimersByTime(pauseBetweenWords);
      });

      expect(screen.getByTestId('dynamicText').textContent).toEqual(
        mockedText[0]
      );
    });

    it('deleting chars after pause', () => {
      const slicedCharsFromEnd = 3;
      const component = render(<Typewriter dynamicText={mockedText} />);
      act(() => {
        jest.advanceTimersByTime(
          timeForOneChar * mockedText[0].length +
            pauseBetweenWords +
            timeForOneChar * slicedCharsFromEnd +
            timeForOneChar
        );
      });

      expect(screen.getByTestId('dynamicText').textContent).toEqual(
        mockedText[0].slice(0, mockedText[0].length - slicedCharsFromEnd)
      );
    });
  });
});
