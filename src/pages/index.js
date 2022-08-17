import * as React from 'react';

import { Layout } from '../../src/components/Layout/Layout';
import { Dots } from '../components/Dots/Dots';
import { Typewriter } from '../components/Typewriter/Typewriter';

const IndexPage = () => {
  return (
    <Layout>
      <div data-testid='indexPage' className=''>
        <div className='flex justify-center items-center h-screen 	'>
          <div>
            <h1 className='text-4xl font-bold text-white'>Peter Mada</h1>
            <Typewriter staticText='I am' dynamicText='Developer' />
          </div>
        </div>

        <div className='text-center'></div>
        <Dots />
      </div>
    </Layout>
  );
};

export default IndexPage;
