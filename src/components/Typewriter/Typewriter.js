import * as React from 'react';
import { useState, useEffect } from 'react';
import './Typewriter.scss';

export const Typewriter = ({ staticText, test, dynamicText = [''] }) => {
  const [typing, setTyping] = useState('');

  useEffect(() => {
    let i = -1;
    let j = 0;
    let k = dynamicText[j].length;

    const interval = setInterval(() => {
      i++;
      if (i <= dynamicText[j].length) {
        setTyping((typing) => dynamicText[j].slice(0, i));
      }

      if (i > dynamicText[j].length + 50) {
        k--;
        if (k < 0) {
          j = j >= dynamicText.length - 1 ? 0 : ++j;
          i = -1;
          k = dynamicText[j].length;
          return;
        }

        setTyping((typing) => dynamicText[j].slice(0, k));
      }
    }, 75);
    return () => clearInterval(interval);
  }, [dynamicText]);

  return (
    <div data-testid='typewriter'>
      <div className='wrap text-primary dark:text-white text-base md:text-xl flex justify-start	justify-items-start'>
        {staticText ? <p>{staticText}&nbsp;</p> : ''}
        <div>
          <p className='dyanicText' data-testid='dynamicText'>
            {typing}
          </p>
        </div>
      </div>
    </div>
  );
};
