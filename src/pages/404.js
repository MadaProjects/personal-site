import * as React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Dots } from '../components/Dots/Dots';
import { Seo } from '../components/Seo';

const NotFoundPage = () => {
  return (
    <Layout>
      <main
        data-testid='pageNotFound'
        className='indexWrap relative overflow-hidden'>
        <div className='flex justify-center h-screen'>
          <div className='mt-40 2xl:mt-60 text-center'>
            <h1 className='name text-5xl md:text-7xl md:tracking-wider font-bold text-primary dark:text-white mb-3'>
              40<span className='fallingLetter'>4</span>
            </h1>
            <p className='mt-10 dark:text-white text-base text-lg md:text-2xl'>
              Page not found
            </p>
          </div>
        </div>

        <Dots />
      </main>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <Seo description='404 - page not found' />;
