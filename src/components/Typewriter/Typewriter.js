import * as React from 'react';
import { useState, useEffect } from 'react';
import './Typewriter.scss';

export const Typewriter = ({ staticText, dynamicText }) => {
  const [typing, setTyping] = useState('');
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    console.log(localStorage.paused);
    if (localStorage.paused) {
      setPaused(true);
    }
  }, []);

  useEffect(() => {
    let j = 0;
    let i = -1;
    let k = dynamicText[j] ? dynamicText[j].length : 0;
    if (dynamicText && !paused) {
      const interval = setInterval(() => {
        i++;
        if (i <= dynamicText[j].length) {
          setTyping((typing) => {
            return dynamicText[j].slice(0, i);
          });
        }

        if (i > dynamicText[j].length + 50) {
          k--;
          if (k < 0) {
            j++;
            if (j >= dynamicText.length) {
              j = 0;
            }

            i = -1;
            k = dynamicText[j].length;

            return;
          }

          setTyping((typing) => {
            return dynamicText[j].slice(0, k);
          });
        }
      }, 75);
      return () => clearInterval(interval);
    } else {
      setTyping('FALSE TIP');
    }
  }, [dynamicText]);

  return (
    <div data-testid='typewriter'>
      <div className='wrap text-primary dark:text-white text-base md:text-xl flex justify-start	justify-items-start'>
        {staticText ? <p>{staticText}&nbsp;</p> : ''}
        <div>
          <p className='dyanicText'>{typing}</p>
        </div>
      </div>
    </div>
  );
};
