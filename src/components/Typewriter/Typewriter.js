import * as React from 'react';
import { useState, useEffect } from 'react';
import './Typewriter.scss';

export const Typewriter = ({ staticText, dynamicText }) => {
  const [typing, setTyping] = useState('');

  useEffect(() => {
    let i = -1;
    let k = dynamicText ? dynamicText.length : 0;
    if (dynamicText) {
      const interval = setInterval(() => {
        i++;
        if (i <= dynamicText.length) {
          setTyping((typing) => {
            return dynamicText.slice(0, i);
          });
        }

        if (i > dynamicText.length + 50) {
          k--;
          if (k < 0) {
            i = -1;
            k = dynamicText.length;
            return;
          }
          setTyping((typing) => {
            return dynamicText.slice(0, k);
          });
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [dynamicText]);

  return (
    <div data-testid='typewriter'>
      <div className='wrap text-white'>
        {staticText ? <p className=''>{staticText}&nbsp;</p> : ''}
        <p className='dyanicText'>{typing}</p>
      </div>
    </div>
  );
};
