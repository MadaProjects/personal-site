import * as React from 'react';

import { Layout } from '../../src/components/Layout/Layout';
import { Dots } from '../components/Dots/Dots';
import { Typewriter } from '../components/Typewriter/Typewriter';
import { Seo } from '../components/Seo';
import './Index.scss';

const IndexPage = () => {
  const positions = [
    'Full Stack Developer',
    'Front-end Developer',
    'fan of functional programming',
    'JavaScript Developer',
    'React Developer',
  ];

  return (
    <Layout>
      <div
        data-testid='indexPage'
        className='indexWrap relative overflow-hidden'>
        <main className='flex justify-center h-screen' id='main'>
          <div className='mt-40 2xl:mt-60 relative'>
            <h1 className='name mb-7 text-5xl md:text-7xl md:tracking-wider font-bold text-primary dark:text-white mb-3'>
              Peter Mad<span className='fallingLetter'>a</span>
            </h1>
            <div className='absolute left-0'>
              <Typewriter staticText="I'm" dynamicText={positions} />
            </div>
          </div>
        </main>

        <div className='text-center'></div>
        <Dots />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
