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
        <div className='text-center'>
          <button
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            type='button'
            data-drawer-target='drawer-navigation'
            data-drawer-toggle='drawer-navigation'
            aria-controls='drawer-navigation'>
            Show navigation
          </button>
        </div>
        <Dots />
      </div>
    </Layout>
  );
};

export default IndexPage;
