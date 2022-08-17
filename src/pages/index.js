import * as React from 'react';

import { Layout } from '../../src/components/Layout/Layout';
import { Dots } from '../components/Dots/Dots';
import { Typewriter } from '../components/Typewriter/Typewriter';
import './Index.scss';

const IndexPage = () => {
  return (
    <Layout>
      <div
        data-testid='indexPage'
        className='indexWrap relative -z-10 overflow-hidden'>
        <div className='flex justify-center  h-screen 	'>
          <div className='mt-40 2xl:mt-60'>
            <h1 className='text-5xl font-bold text-white mb-3'>
              Peter Mada
            </h1>
            <Typewriter staticText="I'm" dynamicText='Developer' />
          </div>
        </div>

        <div className='text-center'></div>
        <Dots />
      </div>
    </Layout>
  );
};

export default IndexPage;
