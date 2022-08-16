import * as React from 'react';

import { Layout } from '../../src/components/Layout/Layout';
import { Dots } from '../components/Dots/Dots';
import { Typewriter } from '../components/Typewriter/Typewriter';

const IndexPage = () => {
  return (
    <Layout>
      <div data-testid='indexPage'>
        <h1 className='text-3xl font-bold underline'>Peter Mada</h1>
        <Typewriter dynamicText='Developer' />
        <div className='text-center'></div>
        <Dots />
      </div>
    </Layout>
  );
};

export default IndexPage;
